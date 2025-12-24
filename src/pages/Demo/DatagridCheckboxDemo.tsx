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
import { Button } from "../../components/UI/Button";
import { Title } from "../../components/Typography/Title";



const DatagridCheckboxDemo = (): ReactElement => {

    usePageTitle("Datagrid checkboxes", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Datagrid checkboxes", href: "/demo/datagridcheckbox" },
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
                toolbarBorderBottom={true}
                toolbarTitle={<Title size="md">All orders</Title>}
                toolbarPrefixItems={[
                    <Button key="create" onClick={() => alert('Create')}>
                        <Icon icon={IconDefinitions.plus} />
                        Toevoegen
                    </Button>
                ]}
               
                data={data || []}
                total={total || 0}
                enableCompactView
                loading={status === "pending"}
                onFilterUpdate={handleFilterUpdate}
                onRowsChecked={(checkedItems) => console.log('Checked rows:', checkedItems)}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
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
                            action: item => (<Icon icon={IconDefinitions.eye} onClick={() => alert(`Bekijk order ${item.orderNumber}`)} />)
                        },
                        {
                            label: "Verwijder",
                            action: item => (<Icon icon={IconDefinitions.bin} onClick={() => alert(`Verwijder order ${item.orderNumber}`)} />)
                        }
                    ]
                }
            />
        </div>
    )
}

export default DatagridCheckboxDemo;