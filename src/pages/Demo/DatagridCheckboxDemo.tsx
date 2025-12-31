import React, { ReactElement, useState } from "react";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import { Title } from "../../components/Typography/Title";
import { Button } from "../../components/UI/Button";
import { Icon } from "../../components/UI/Icons/Icon";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useTableQueryClientFilter from "../../lib/hooks/useTableQueryClientFilter";
import { getOrdersQuery, MyGetModel } from "../../lib/testdata/models";
import { IconDefinitions } from "../../lib/utils/definitions";
import { Subtitle } from "../../components/Typography/Subtitle";



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
                toolbarTitle={<Subtitle>Alle orders</Subtitle>}
                toolbarPrefixItems={[
                    <Button key="create" onClick={() => alert('Create')}>
                        <Icon icon={IconDefinitions.plus} />
                        Toevoegen
                    </Button>
                ]}

                data={data || []}
                total={total || 0}
                enableCompactView={true}
                loading={status === "pending"}
                onFilterUpdate={handleFilterUpdate}
                enableCheckboxes={true}
                onRowsChecked={(checkedItems) => console.log('Checked rows:', checkedItems)}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
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

export default DatagridCheckboxDemo;