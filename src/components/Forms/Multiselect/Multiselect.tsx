import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, ReactElement, useState } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { ColorDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Box, { BoxProps } from '../../Base/Box/Box';
import Input from '../Input/Input';
import { ContentItemType } from '../../UI/ContentItem/ContentItem';
import Checkbox from '../Checkbox/Checkbox';


export interface MultiselectProps extends Omit<BoxProps, 'title'> {
    items: ContentItemType[] | undefined;
    collectionScrollable?: boolean;
    collectionScrollheight?: string;
    collectionColorMute?: ColorDefinitions;
    collectionColor?: ColorDefinitions;
    collectionBackground?: ColorDefinitions;
    collectionBorderColor?: ColorDefinitions;
    collectionItemBorder?: 'bordered' | 'underlined';
    collectionRounded?: SizeDefinitions;
    collectionCompact?: boolean;
    collectionMedium?: boolean;
    collectionHoverable?: boolean;
    collectionSelectable?: boolean;
    collectionSelectMultiple?: boolean;
    collectionCss?: string;
    selected: string[];
    setSelected: (selected: string[]) => void;
    selectedColor?: ColorDefinitions;
    validationErrorMessage?: string;
    showSearch?: boolean;
    showCheckAll?: boolean;
    showHeader?: boolean;
    checkboxColor?: ColorDefinitions;
    headerBorderColor?: ColorDefinitions;
    title?: string | ReactElement;
    searchPlaceholder?: string;
}


//--- Helpers --- //

const isSelected = (option: ContentItemType, selected: string[]) => selected.includes(option.id);

const defaultSearch = (val: string, q: string) => val.toLowerCase().includes(q.toLowerCase());

const toText = (val: unknown): string => {
    if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
        return String(val);
    }
    return '';
};


const MultiselectHeader = ({
    showHeader,
    headerBorderColor,
    title,
    validationErrorMessage,
    showCheckAll,
    showSearch,
    allSelected,
    checkboxColor,
    selectAll,
    selectNone,
    searchTerm,
    setSearchTerm,
    searchPlaceholder,
}: {
    showHeader: boolean;
    headerBorderColor?: ColorDefinitions;
    title?: string | ReactElement;
    validationErrorMessage?: string;
    showCheckAll: boolean;
    showSearch: boolean;
    allSelected: boolean;
    checkboxColor: ColorDefinitions;
    selectAll: () => void;
    selectNone: () => void;
    searchTerm: string;
    setSearchTerm: (val: string) => void;
    searchPlaceholder: string;
}) => {
    if (!showHeader) return null;

    return (
        <div className={`multiselect__header ${headerBorderColor ? 'border-' + headerBorderColor : ''}`}>
            {title && (
                <div className="subtitle multiselect__header__title">
                    <span>{title}</span>
                    {validationErrorMessage && (
                        <div className="field-validation-error">
                            <span>{validationErrorMessage}</span>
                        </div>
                    )}
                </div>
            )}

            {(showCheckAll || showSearch) && (
                <div className="multiselect__header__content">
                    {showCheckAll && (
                        <div className="multiselect__header__content__checkall">
                            <Checkbox
                                checked={allSelected}
                                color={checkboxColor}
                                onChange={() => (allSelected ? selectNone() : selectAll())}
                            />
                        </div>
                    )}

                    {showSearch && (
                        <div className="multiselect__header__content__search">
                            <Input
                                onTextInput={setSearchTerm}
                                inline={true}
                                label={searchPlaceholder}
                                value={searchTerm}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const MultiselectItem = ({
    item,
    selected,
    setSelected,
    checkboxColor,
    collectionItemCls,
    selectedColor,
    collectionSelectable,
    collectionSelectMultiple,
}: {
    item: ContentItemType;
    selected: string[];
    setSelected: (selected: string[]) => void;
    checkboxColor: ColorDefinitions;
    collectionItemCls: string;
    selectedColor: ColorDefinitions;
    collectionSelectable?: boolean;
    collectionSelectMultiple?: boolean;
}) => {
    const toggleSelect = () => {
        setSelected(
            isSelected(item, selected)
                ? selected.filter((x) => x !== item.id)
                : [...selected, item.id]
        );
    };

    return (
        <motion.div
            key={item.id}
            layout
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring' }}
            className={`collection__item ${isSelected(item, selected) ? 'selected' : ''} ${collectionItemCls}`}
            style={{
                cursor: collectionSelectable || collectionSelectMultiple ? 'pointer' : 'default',
                ...(selectedColor ? { '--color-selected': `var(--color-${selectedColor})` } : {}),
            }}
        >
            <div className="collection__item__container">
                <div className="content-item" key={item.id}>
                    <div className={`actions ${item.prefixPosition ? 'actions--' + item.prefixPosition : ''}`}>
                        <Checkbox
                            checked={isSelected(item, selected)}
                            color={isSelected(item, selected) ? ColorDefinitions.Offwhite : checkboxColor}
                            onChange={toggleSelect}
                        />
                    </div>

                    <div className={`meta ${item.contentPositon ? 'meta--' + item.contentPositon : ''}`}>
                        <button className="link link-hover" onClick={toggleSelect}>
                            {item.content}
                        </button>
                    </div>

                    {item.postfix && (
                        <div className={`actions ${item.postfixPosition ? 'actions--' + item.postfixPosition : ''}`}>
                            {item.postfix}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Multiselect = ({
    items = [],
    collectionScrollable,
    collectionScrollheight,
    collectionColorMute,
    collectionColor,
    collectionBackground,
    collectionBorderColor = ColorDefinitions.Surface,
    collectionItemBorder = 'underlined',
    collectionRounded,
    collectionCompact,
    collectionMedium,
    collectionHoverable,
    collectionSelectable,
    collectionSelectMultiple,
    collectionCss,
    selected,
    setSelected,
    selectedColor = ColorDefinitions.Primary,
    validationErrorMessage,
    showSearch = true,
    showCheckAll = true,
    showHeader = true,
    headerBorderColor,
    checkboxColor = ColorDefinitions.Primary,
    title,
    searchPlaceholder = 'Zoeken...',
    children,
    ...styledDivProps
}: MultiselectProps): ReactElement => {
    const [searchTerm, setSearchTerm] = useState('');

    const allSelected = items.length > 0 && selected.length === items.length;
    const selectAll = () => setSelected(items.map((x) => x.id));
    const selectNone = () => setSelected([]);

    items = items.filter((x) => {
        const text = `${toText(x.prefix)} ${toText(x.content)} ${toText(x.postfix)}`;
        return defaultSearch(text, searchTerm);
    });

    const collectionItemCls = [
        collectionRounded ? `rounded-${collectionRounded}` : '',
        collectionColorMute ? `text-mute-${collectionColorMute}` : '',
        collectionColor ? `text-${collectionColor}` : '',
        collectionBackground ? `bg-${collectionBackground}` : '',
        collectionBorderColor ? `border-${collectionBorderColor}` : '',
    ]
        .filter(Boolean)
        .join(' ');

    const borderClass =
        collectionBorderColor && collectionItemBorder ? `collection--${collectionItemBorder}` : '';

    const collectionCls = [
        'collection',
        collectionCss,
        collectionScrollable ? 'scroll' : '',
        borderClass,
        collectionCompact ? `collection--compact` : '',
        collectionMedium ? `collection--md` : '',
        collectionHoverable ? 'collection--hover' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Box {...styledDivProps} css="multiselect">
            <MultiselectHeader
                showHeader={showHeader}
                headerBorderColor={headerBorderColor}
                title={title}
                validationErrorMessage={validationErrorMessage}
                showCheckAll={showCheckAll}
                showSearch={showSearch}
                allSelected={allSelected}
                checkboxColor={checkboxColor}
                selectAll={selectAll}
                selectNone={selectNone}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchPlaceholder={searchPlaceholder}
            />

            <div className="multiselect__content">
                <div
                    className={collectionCls}
                    style={
                        {
                            '--collection-scroll-height': collectionScrollheight || '300px',
                        } as React.CSSProperties
                    }
                >
                    <AnimatePresence>
                        {items.map((item) => (
                            <MultiselectItem
                                key={item.id}
                                item={item}
                                selected={selected}
                                setSelected={setSelected}
                                checkboxColor={checkboxColor}
                                collectionItemCls={collectionItemCls}
                                selectedColor={selectedColor}
                                collectionSelectable={collectionSelectable}
                                collectionSelectMultiple={collectionSelectMultiple}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </Box>
    );
};


export interface FormMultiselectProps extends Omit<MultiselectProps, 'selected' | 'setSelected'> {
    rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormMultiselect: FC<FormMultiselectProps> = (props) => {
    const { name, control, rules, ...rest } = props;

    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <Multiselect
            {...rest}
            selected={field.value}
            setSelected={field.onChange}
            validationErrorMessage={validationErr}
        />
    );
};


export default Multiselect;