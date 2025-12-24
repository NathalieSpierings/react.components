import React, { ReactElement, useState } from "react";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { getOrdersQuery, MyGetModel } from "../../lib/testdata/models";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import useTableQueryClientFilter from "../../lib/hooks/useTableQueryClientFilter";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import { Icon } from "../../components/UI/Icons/Icon";
import { IconDefinitions } from "../../lib/utils/definitions";
import { Subtitle } from "../../components/Typography/Subtitle";



const DatagridCollapsibleDemo = (): ReactElement => {

    usePageTitle("Datagrid collapsible row", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Datagrid collapsible row", href: "/demo/datagridecollapsible" },
    ]);

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<MyGetModel> | null>(null);
    const [data, total, status] = useTableQueryClientFilter({
        queryFn: getOrdersQuery(),
        filters: tableOptions
    });

    const handleFilterUpdate = (options: TableGetDataArguments<MyGetModel>) => {
        setTableOptions(options);
    };


    return (
        <div>

            <Datagrid
            toolbarTitle={<Subtitle>All orders</Subtitle>}
                data={data || []}
                total={total || 0}
                loading={status === "pending"}
                onFilterUpdate={handleFilterUpdate}
                tableInfoContent={<div>Toon info over de orders hier</div>}
                onRowsChecked={(checkedItems) => console.log('Checked rows:', checkedItems)}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}

                collapsibleRowData={(row) => (
                    <div style={{ padding: '1rem' }}>
                        <strong>Adres:</strong> {row.address}<br />
                        <strong>Status:</strong> {row.status}
                    </div>
                )}
                properties={
                    [
                        { prop: "orderNumber", title: "Order #", sortable: true },
                        { prop: "customerName", title: "Klant", sortable: true },
                        { prop: "status", title: "Status", sortable: true },
                        { prop: "address", title: "Adres" },
                        { prop: "totalAmount", title: "Totaal (€)", sortable: false },
                        // { prop: "orderDate", title: "Datum", sortable: true }
                    ]
                }
                rowActions={
                    [
                        {
                            label: "Bekijk",
                            action: item => (<Icon icon={IconDefinitions.eye} onClick={() => alert(`Bekijk order ${item.orderNumber}` )}/>)
                        },
                        {
                            label: "Verwijder",
                            action: item => (<Icon icon={IconDefinitions.bin} onClick={() => alert(`Verwijder order ${item.orderNumber}` )}/>)
                        }
                    ]
                }
            />
        </div>
    )
}

export default DatagridCollapsibleDemo;