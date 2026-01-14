import moment from "moment";
import "moment/locale/nl";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { Button, Checkbox, Dropdown, Title, Toggle, Tooltip } from "../../components";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import { Icon } from "../../components/UI/Icons/Icon";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useTableQueryClientFilter from "../../lib/hooks/useTableQueryClientFilter";
import { getProductsQuery, ProductGetModel } from "../../lib/testdata/models";
import { ColorDefinitions, IconDefinitions } from "../../lib/utils/definitions";


const DatagridFilterDatabindDemo = (): ReactElement => {

    usePageTitle("Datagrid", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Datagrid", href: "/demo/datagrid" },
    ]);

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [data, total, status] = useTableQueryClientFilter({
        queryFn: getProductsQuery(),
        filters: tableOptions
    });


    const [toggleChecked, setToggleChecked] = useState(true);

    const [categoryOptions, setCategoryOptions] = useState<
        { label: string; value: string }[]
    >([]);

    useEffect(() => {
    // Alleen de eerste keer vullen
    if (categoryOptions.length > 0) return;
    if (!data || data.length === 0) return;

    const unique = Array.from(
        new Set(data.map(x => String(x.categorie)))
    ).map(v => ({ label: v, value: v }));

    setCategoryOptions(unique);
}, [data, categoryOptions.length]);

    return (
        <div>
            <Datagrid
                toolbarTitle={<Title size="md">Alle orders</Title>}
                toolbarBorderBottom={true}
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
                onFilterUpdate={setTableOptions}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
                properties={
                    [
                        { prop: "product", title: "Product", sortable: true, filter: { type: 'text' } },
                        {
                            prop: "categorie", title: "Categorie", sortable: true,
                            filter: {
                                type: 'select',
                                multiSelect: true,
                                options: categoryOptions
                                //optionsSource: (data) => Array.from(new Set(data.map(x => String(x.categorie)))),
                            }
                        },
                        {
                            prop: "status", title: "Status", sortable: true,
                            filter: {
                                type: 'select',
                                multiSelect: true,
                                options: [
                                    { label: "Pre-order", value: "Pre-order" },
                                    { label: "Op voorraad", value: "Op voorraad" },
                                    { label: "Uitverkocht", value: "Uitverkocht" },
                                ]
                            }
                        },
                        { prop: "merk", title: "Merk", sortable: true, filter: { type: 'text' } },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: item => { return <>€  {item.prijs.toFixed(2)}</> } },
                        { prop: "beschikbaarVanaf", title: "Beschikbaar vanaf", sortable: true, filter: { type: 'text' }, transformValue: (value) => value ? moment(value).locale("nl").format("DD-MM-YYYY") : "" },
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

export default DatagridFilterDatabindDemo;