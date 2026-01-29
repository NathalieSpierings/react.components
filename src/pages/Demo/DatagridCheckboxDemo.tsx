import moment from "moment";
import React, { ReactElement, useState } from "react";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import { Title } from "../../components/Typography/Title";
import { Button } from "../../components/UI/Button";
import { Icon } from "../../components/UI/Icons/Icon";
import { Tooltip } from "../../components/UI/Tooltip";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useTableQueryClientFilter from "../../lib/hooks/useTableQueryClientFilter";
import { getProductsQuery, ProductGetModel } from "../../lib/testdata/models";
import { IconDefinitions } from "../../lib/utils/definitions";



const DatagridCheckboxDemo = (): ReactElement => {

    usePageTitle("Datagrid checkboxes", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Datagrid checkboxes", href: "/demo/datagridcheckbox" },
    ]);

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({
        queryFn: getProductsQuery(),
        filters: tableOptions
    });

    const wrapPrice = (item: ProductGetModel) => {
        return <>€  {item.prijs.toFixed(2)}</>
    }

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
                data={data || []}
                dataRaw={dataRaw}
                total={total || 0}
                enableCompactView={true}
                loading={status === "pending"}
                onFilterUpdate={setTableOptions}
                enableCheckboxes={true}
                onRowsChecked={(checkedItems) => console.log('Checked rows:', checkedItems)}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
                properties={
                    [
                        { prop: "product", title: "Product", sortable: true },
                        { prop: "categorie", title: "Categorie", sortable: true },
                        { prop: "status", title: "Status", sortable: true },
                        { prop: "merk", title: "Merk", sortable: true },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: wrapPrice },
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

export default DatagridCheckboxDemo;