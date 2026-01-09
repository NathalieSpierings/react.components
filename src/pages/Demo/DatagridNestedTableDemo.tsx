import moment from "moment";
import React, { ReactElement, useState } from "react";
import { Button } from "../../components";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import { Title } from "../../components/Typography/Title";
import { Icon } from "../../components/UI/Icons/Icon";
import { Tooltip } from "../../components/UI/Tooltip";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useTableQueryClientFilter from "../../lib/hooks/useTableQueryClientFilter";
import { getOrdersForProduct, getProductsQuery, OrderGetModel, ProductGetModel } from "../../lib/testdata/models";
import { ColorDefinitions, IconDefinitions } from "../../lib/utils/definitions";



const ProductOrdersTable = ({ productId }: { productId: string }) => {

    const itemsPerPage = 5;
    const loadMoreStep = 5;

    const [visibleCount, setVisibleCount] = useState(itemsPerPage);

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<OrderGetModel> | null>(null);
    const [data, total, status] = useTableQueryClientFilter({ queryFn: getOrdersForProduct(productId), filters: tableOptions });

    const visibleOrders = data.slice(0, visibleCount);
    const hasMore = visibleCount < data.length;

    return (
        <div>
            <Datagrid
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
                        transformValue: (value: Date) =>
                            moment(value).format("DD-MM-YYYY"),
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

const DatagridNestedTableDemo = (): ReactElement => {

    usePageTitle("Datagrid nedsted table", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Datagrid nested table", href: "/demo/datagridnestedteable" },
    ]);

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [data, total, status] = useTableQueryClientFilter({ queryFn: getProductsQuery(), filters: tableOptions });
   
    return (
        <div>

            <Datagrid
                toolbarTitle={<Title size="md">Alle orders</Title>}
                data={data || []}
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
                        { prop: "product", title: "Product", sortable: true },
                        { prop: "categorie", title: "Categorie", sortable: true },
                        { prop: "status", title: "Status", sortable: true },
                        { prop: "merk", title: "Merk", sortable: true },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: item => { return <>€  {item.prijs.toFixed(2)}</> } },
                        { prop: "beschikbaarVanaf", title: "Beschikbaar vanaf", sortable: true, transformValue: (value) => value ? moment(value).locale("nl").format("DD-MM-YYYY") : "" },
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

export default DatagridNestedTableDemo;