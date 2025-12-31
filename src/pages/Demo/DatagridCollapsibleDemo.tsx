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
                toolbarTitle={<Subtitle>Alle orders</Subtitle>}
                data={data || []}
                total={total || 0}
                loading={status === "pending"}
                onFilterUpdate={handleFilterUpdate}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}

                collapsibleRowData={(row) => (
                    <div style={{ padding: '1rem' }}>
                        <strong>Naam:</strong> {row.customerName}<br />
                        <strong>product:</strong> {row.product}<br />
                        <strong>Status:</strong> {row.orderStatus}
                    </div>
                )}
                properties={
                    [
                        { prop: "customerName", title: "Klant", sortable: true },
                        { prop: "product", title: "Product", sortable: true },
                        { prop: "quantity", title: "Aantal", sortable: true },
                        { prop: "price", title: "Prijs (€)", sortable: false },
                        { prop: "orderStatus", title: "orderStatus", sortable: true },
                        { prop: "paymentMethod", title: "Betaalmethode", sortable: true },
                        { prop: "deliverer", title: "Verzender", sortable: true },
                        // { prop: "orderDate", title: "Besteldatum", sortable: true},
                    ]
                }
                rowActions={
                    [
                        {
                            label: "Bekijk",
                            action: item => (<Icon icon={IconDefinitions.eye} onClick={() => alert(`Bekijk order ${item.product}`)} />)
                        },
                        {
                            label: "Verwijder",
                            action: item => (<Icon icon={IconDefinitions.bin} onClick={() => alert(`Verwijder order ${item.product}`)} />)
                        }
                    ]
                }
            />
        </div>
    )
}

export default DatagridCollapsibleDemo;