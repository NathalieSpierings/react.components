import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import { IconDefinitions } from '../../../lib/utils/definitions';
import Checkbox from '../../Forms/Checkbox/Checkbox';
import Icon from '../../UI/Icons/Icon/Icon';
import { TableAction, TableActionComponent } from './TableAction';
import TableCell from './TableCell';
import { TableRowConfig } from './TableRowConfig';


export interface TableRowProps<TData> {
    item: TData;
    columns: TableRowConfig<TData>[];
    selected: boolean;
    refresh: () => Promise<void>;
    actions?: TableAction<TData>[];
    handleSingleClick?: (item: TData) => void;
    handleDoubleClick?: (item: TData) => void;
    checked?: boolean;
    onRowCheckedChanged?: (checked: boolean) => void;


    // Collapsible 
    expanded?: boolean;
    onToggleCollapsibleRow?: () => void;
    collapsibleRowData?: (item: TData) => ReactElement;
}

function TableRow<TData extends { id: string | number }>({
    item,
    columns,
    selected,
    actions,
    checked,
    handleSingleClick = (x) => { },
    handleDoubleClick = (x) => { },
    onRowCheckedChanged,
    expanded,
    onToggleCollapsibleRow,
    collapsibleRowData,
}: Readonly<TableRowProps<TData>>): ReactElement {

    const value = (item: TData, col: TableRowConfig<TData>): string | ReactElement => {
        if (col.useItemOnly) {
            return col.useItemOnly(item);
        }
        const getVal = col.transformValue ? col.transformValue! : (x: any) => x;
        const strValue = getVal((item as any)[col.prop]);
        return col.wrapValue ? col.wrapValue(item, strValue) : strValue;
    };

     const colSpan =
        columns.length +
        (onRowCheckedChanged ? 1 : 0) +
        (actions ? 1 : 0) +
        (collapsibleRowData ? 1 : 0);

    return (
        <>
            <tr
                className={selected ? 'selected' : ''}
                onClick={() => handleSingleClick(item)}
                onDoubleClick={() => handleDoubleClick(item)}
            >
                 {collapsibleRowData && onToggleCollapsibleRow && (
                    <td className="table-text-center">
                        <button  onClick={e => { e.stopPropagation(); onToggleCollapsibleRow(); }}>
                            {expanded 
                            ? (<Icon icon={IconDefinitions.angle_down}  ring="ring-2"  />) //'▾' 
                            : (<Icon icon={IconDefinitions.angle_right} ring="ring-2" />) //'▸'
                            }
                        </button>
                    </td>
                )}



                {onRowCheckedChanged && (
                    <td className="table-text-center">
                        <Checkbox checked={checked} onChange={onRowCheckedChanged} />
                    </td>
                )}


                {columns.map((column) => (
                    <td key={item.id + column.prop}
                        className={column.cssClass}
                        scope="row"
                        data-label={column.title}
                    >
                        <TableCell
                            textMute={column.textMute}
                            textAlign={column.textAlign}
                            showTooltip={column.showTooltip}
                            tooltipContent={column.tooltipContent}
                            tooltipColor={column.tooltipColor}
                            tooltipArrow={column.tooltipArrow}
                            overflow={column.overflow}
                        >
                            {value(item, column)}
                        </TableCell>
                    </td>
                ))}

                {actions ? (
                    <TableActionComponent
                        actions={actions}
                        refresh={async () => { }}
                        item={item}
                    />
                ) : null}
            </tr>

            <AnimatePresence initial={false}>
                {expanded && collapsibleRowData && (
                    <motion.tr
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="expanded-row"
                    >
                        <td colSpan={colSpan}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className='expanded-row__container'
                            >
                                {collapsibleRowData(item)}
                            </motion.div>
                        </td>
                    </motion.tr>
                )}
            </AnimatePresence>
        </>
    );
}

export default TableRow;