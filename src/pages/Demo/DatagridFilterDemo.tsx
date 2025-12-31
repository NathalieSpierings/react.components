import React, { ReactElement, useState } from "react";
import { Button, Subtitle, Title, Toggle } from "../../components";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import { Icon } from "../../components/UI/Icons/Icon";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useTableQueryClientFilter from "../../lib/hooks/useTableQueryClientFilter";
import { getOrdersQuery, MyGetModel } from "../../lib/testdata/models";
import { ColorDefinitions, IconDefinitions } from "../../lib/utils/definitions";

const DatagridFilterDemo = (): ReactElement => {

    usePageTitle("Datagrid", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Datagrid", href: "/demo/datagrid" },
    ]);

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<MyGetModel> | null>(null);
    const [data, total, status] = useTableQueryClientFilter({
        queryFn: getOrdersQuery(),
        filters: tableOptions
    });

    const handleFilterUpdate = (options: TableGetDataArguments<MyGetModel>) => {
        setTableOptions(options);
    };

    const [toggleChecked, setToggleChecked] = useState(true);

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
                toolbarPostfixItems={[
                    <Toggle key="toggle"
                        color={ColorDefinitions.Primary}
                        label="Gearchiveerd verbergen"
                        checked={toggleChecked}
                        onChange={setToggleChecked}
                        labelPosition="left"
                    />
                ]}

                enableCompactView={true}
                data={data || []}
                total={total || 0}
                loading={status === "pending"}
                onFilterUpdate={handleFilterUpdate}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
                properties={
                    [
                        { prop: "customerName", title: "Klant", sortable: true, filter: { type: 'text' } },
                        { prop: "product", title: "Product", sortable: true, filter: { type: 'text' } },
                        { prop: "quantity", title: "Aantal", sortable: true, filter: { type: 'text' } },
                        { prop: "price", title: "Prijs (€)", sortable: false, filter: { type: 'text' } },
                        { prop: "orderStatus", title: "orderStatus", sortable: true, 
                            filter: { 
                            type: 'select', 
                                options: [
                                    { label: "Verstuurd", value: "shipped" },
                                    { label: "Verzamelen", value: "pending" },
                                    { label: "Bezorgd", value: "delivered" },
                                    { label: "Geannuleerd", value: "canceled" },
                                ] 
                            }  
                        },
                        { prop: "paymentMethod", title: "Betaalmethode", sortable: true, 
                            filter: { 
                                type: 'select', 
                                options: [
                                    { label: "Creditcard", value: "creditcard" },
                                    { label: "Ideal", value: "ideal" },
                                    { label: "Overschrijving", value: "overschrijving" },
                                ] 
                            }  
                        },
                        { prop: "deliverer", title: "Verzender", sortable: true, 
                            filter: { 
                                type: 'select', 
                                options: [
                                    { label: "DHL", value: "DHL" },
                                    { label: "UPS", value: "UPS" },
                                    { label: "Post NL", value: "postnl" },
                                ] 
                            }  
                        },
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

export default DatagridFilterDemo;