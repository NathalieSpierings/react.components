import React, { ReactElement, useState } from "react";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import { Title } from "../../components/Typography/Title";
import { Icon } from "../../components/UI/Icons/Icon";
import { Tooltip } from "../../components/UI/Tooltip";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useTableQueryClientFilter from "../../lib/hooks/useTableQueryClientFilter";
import { getOrdersForProduct, getProductsQuery, OrderGetModel, ProductGetModel } from "../../lib/testdata/models";
import moment from "moment";
import { Button } from "../../components/UI/Button";
import { Toggle } from "../../components/Forms/Toggle";
import { ColorDefinitions, IconDefinitions } from "../../lib/utils/definitions";



const ProductOrdersTable = ({ productId }: { productId: string }) => {

    const itemsPerPage = 5;
    const loadMoreStep = 5;

    const [visibleCount, setVisibleCount] = useState(itemsPerPage);

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<OrderGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({ queryFn: getOrdersForProduct(productId), filters: tableOptions });

    const visibleOrders = data.slice(0, visibleCount);
    const hasMore = visibleCount < data.length;

    return (
        <div>
            <Datagrid
                dataRaw={dataRaw}
                data={visibleOrders}
                total={visibleOrders.length}
                loading={status === "pending"}
                onFilterUpdate={setTableOptions}
                enablePagination={false}
                properties={[
                    { prop: "klant", title: "Klant", sortable: true },
                    { prop: "aantal", title: "Aantal", sortable: true },
                    { prop: "status", title: "Status", sortable: true },
                    {
                        prop: "datumBesteld",
                        title: "Datum besteld",
                        sortable: true,
                        transformValue: (value) => value ? moment(value).locale("nl").format("DD-MM-YYYY") : ""
                    },
                ]}
                footerContent={
                    hasMore && (
                        <div className="load-more">
                            <Button color={ColorDefinitions.Primary}
                                onClick={() =>
                                    setVisibleCount(x => x + loadMoreStep)
                                }
                            >
                                Toon meer ({data.length - visibleCount})
                            </Button>


                        </div>
                    )}

            />
        </div>
    );
};

const DatagridAllDemo = (): ReactElement => {

    usePageTitle("Datagrid All", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Datagrid all", href: "/demo/datagridall" },
    ]);


    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({ queryFn: getProductsQuery(), filters: tableOptions });

    const [toggleChecked, setToggleChecked] = useState(true);

     const wrapPrice = (item: ProductGetModel) => {
            return <>€  {item.prijs.toFixed(2)}</>
        }

    return (
        <div>

            <Datagrid
                toolbarTitle={<Title size="md">Alle orders</Title>}
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
                enableCheckboxes={true}
                onRowsChecked={(checkedItems) => console.log('Checked rows:', checkedItems)}
                data={data || []}
                dataRaw={dataRaw}
                total={total || 0}
                loading={status === "pending"}
                onFilterUpdate={setTableOptions}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}

                collapsibleRowData={(item) => (
                    <ProductOrdersTable productId={item.id} />
                )}
                properties={
                    [
                        { prop: "product", title: "Product", sortable: true, filter: { type: 'text' } },
                        {
                            prop: "categorie", title: "Categorie", sortable: true,
                            filter: {
                                type: 'select',
                                options: [
                                    { label: "Meubels", value: "Meubels" },
                                    { label: "Huishouden", value: "Huishouden" },
                                    { label: "Elektronica", value: "Elektronica" },
                                    { label: "Kleding", value: "Kleding" },
                                    { label: "Sport", value: "Sport" },
                                    { label: "Boeken", value: "Boeken" },
                                ]
                            }
                        },
                        {
                            prop: "status", title: "Status", sortable: true,
                            filter: {
                                type: 'select',
                                options: [
                                    { label: "Pre-order", value: "Pre-order" },
                                    { label: "Op voorraad", value: "Op voorraad" },
                                    { label: "Uitverkocht", value: "Uitverkocht" },
                                ]
                            }
                        },
                        { prop: "merk", title: "Merk", sortable: true, filter: { type: 'text' } },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: wrapPrice },
                        { prop: "beschikbaarVanaf", title: "Beschikbaar vanaf", sortable: true, filter: { type: 'date' }, transformValue: (value) => value ? moment(value).locale("nl").format("DD-MM-YYYY") : "" },

                    ]
                }
                rowActions={
                    [
                        {
                            icon: <Tooltip content="Bekijk"><Icon icon={IconDefinitions.eye} hover={true} iconCss="pointer" /></Tooltip>,
                            action: (item) => { alert(`Bekijk order ${item.product}`) }
                        },
                        {
                            icon: <Tooltip content="Verwijder"><Icon icon={IconDefinitions.bin} hover={true} iconCss="pointer" /></Tooltip>,
                            action: (item) => { alert(`Verwijder order ${item.product}`) }
                        },
                    ]
                }
            />
        </div>
    )
}

export default DatagridAllDemo;