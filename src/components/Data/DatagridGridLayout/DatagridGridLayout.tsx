import React, { ReactElement } from "react";
import { Datagrid, DatagridProps } from "../../Data/Datagrid";
import { GridLayout, GridLayoutProps } from "../../UI/GridLayout";

export interface DatagridGridLayoutProps<TData> extends
    GridLayoutProps,
    DatagridProps<TData>{
    }
    
function DatagridGridLayout<TData extends { id: string | number }>({
    open,
    openDrawer,
    drawerContent,
    drawerTitle,
    drawerHeaderBorderColor,
    dividerBorderColor,
    data,
    total,
    loading,
    onFilterUpdate,
    properties,
    initialSortConfig,
    enableSearch,
    enableCompactView,
    enablePagination,
    rowActions,
    rowSingleClickAction,
    rowDoubleClickAction,
    tableInfoContent,
    tooltipColor,
    enableCheckboxes,
    onRowsChecked,
    collapsibleRowData,
    toolbarTitle,
    toolbarNavItems,
    toolbarPrefixItems,
    toolbarPostfixItems,
    toolbarSeparator,
    toolbarBorderBottom,
    tableCss,
    footerContent,
    loaderDuration,
    loaderLoading,
    loaderBackground,
    loaderLabels,
    loaderShowLabels,
    loaderLabelColor,
    loaderShowOverlay,
    loaderTableOverlay,
    loaderCentered,
    loaderShowAnimation,
    loaderAnimationColor,
}: Readonly<DatagridGridLayoutProps<TData>>): ReactElement {

    return (
        <GridLayout
            open={open}
            openDrawer={openDrawer}
            drawerContent={drawerContent}
            drawerTitle={drawerTitle}
            drawerHeaderBorderColor={drawerHeaderBorderColor}
            dividerBorderColor={dividerBorderColor}
        >
            <Datagrid
                data={data}
                total={total}
                loading={loading}
                onFilterUpdate={onFilterUpdate}
                properties={properties}
                initialSortConfig={initialSortConfig}
                enableSearch={enableSearch}
                enablePagination={enablePagination}
                enableCompactView={enableCompactView}
                rowActions={rowActions}
                rowSingleClickAction={rowSingleClickAction}
                rowDoubleClickAction={rowDoubleClickAction}
                tableInfoContent={tableInfoContent}
                tooltipColor={tooltipColor}
                enableCheckboxes={enableCheckboxes}
                onRowsChecked={onRowsChecked}
                collapsibleRowData={collapsibleRowData}
                toolbarTitle={toolbarTitle}
                toolbarNavItems={toolbarNavItems}
                toolbarPrefixItems={toolbarPrefixItems}
                toolbarPostfixItems={toolbarPostfixItems}
                toolbarSeparator={toolbarSeparator}
                toolbarBorderBottom={toolbarBorderBottom}
                tableCss={tableCss}
                footerContent={footerContent}
                loaderDuration={loaderDuration}
                loaderLoading={loaderLoading}
                loaderBackground={loaderBackground}
                loaderLabels={loaderLabels}
                loaderShowLabels={loaderShowLabels}
                loaderLabelColor={loaderLabelColor}
                loaderShowOverlay={loaderShowOverlay}
                loaderTableOverlay={loaderTableOverlay}
                loaderCentered={loaderCentered}
                loaderShowAnimation={loaderShowAnimation}
                loaderAnimationColor={loaderAnimationColor}
            />
        </GridLayout>

    )
}

export default DatagridGridLayout;