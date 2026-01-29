import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { MemoryRouter } from 'react-router';
import { SvgSprite } from '../../../../assets/SvgSprite';
import useTableQueryClientFilter from '../../../../lib/hooks/useTableQueryClientFilter';
import { getOrdersForProduct, getProductsQuery, OrderGetModel, ProductGetModel } from '../../../../lib/testdata/models';
import { ColorDefinitions, IconDefinitions } from '../../../../lib/utils/definitions';
import Toggle from '../../../Forms/Toggle/Toggle';
import Title from '../../../Typography/Title/Title';
import Button from '../../../UI/Button/Button';
import Icon from '../../../UI/Icons/Icon/Icon';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import { TableGetDataArguments } from '../../Table/TableData';
import Datagrid from '../Datagrid';
import moment from 'moment';

const queryClient = new QueryClient();

const meta: Meta<typeof Datagrid> = {
    title: 'Data/Datagrid',
    component: Datagrid,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <SvgSprite />
                <QueryClientProvider client={queryClient}>
                    <Story />
                </QueryClientProvider>
            </MemoryRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Datagrid>;

export const Default: StoryFn = () => {

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({
        queryFn: getProductsQuery(),
        filters: tableOptions
    });

    const handleFilterUpdate = (options: TableGetDataArguments<ProductGetModel>) => {
        setTableOptions(options);
    };


    return (

        <section className="centered centered--narrow">
            <Datagrid
                toolbarTitle={<Title size="md">Alle orders</Title>}
                data={data || []}
                dataRaw={dataRaw}
                total={total || 0}
                loading={status === "pending"}
                onFilterUpdate={handleFilterUpdate}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
                properties={
                    [
                        { prop: "product", title: "Product", sortable: true },
                        { prop: "categorie", title: "Categorie", sortable: true },
                        { prop: "status", title: "Status", sortable: true },
                        { prop: "merk", title: "Merk", sortable: true },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: wrapPrice },
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
        </section>
    )
}

export const Checkboxes: StoryFn = () => {

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({
        queryFn: getProductsQuery(),
        filters: tableOptions
    });

    const handleFilterUpdate = (options: TableGetDataArguments<ProductGetModel>) => {
        setTableOptions(options);
    };


    return (

        <section className="centered centered--narrow">
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
                onFilterUpdate={handleFilterUpdate}
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
        </section>
    )
}

export const Toolbar: StoryFn = () => {

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({
        queryFn: getProductsQuery(),
        filters: tableOptions
    });

    const handleFilterUpdate = (options: TableGetDataArguments<ProductGetModel>) => {
        setTableOptions(options);
    };
    const [toggleChecked, setToggleChecked] = useState(true);

    return (

        <section className="centered centered--narrow">
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
                dataRaw={dataRaw}
                total={total || 0}
                loading={status === "pending"}
                onFilterUpdate={handleFilterUpdate}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
                properties={
                    [
                        { prop: "product", title: "Product", sortable: true },
                        { prop: "categorie", title: "Categorie", sortable: true },
                        { prop: "status", title: "Status", sortable: true },
                        { prop: "merk", title: "Merk", sortable: true },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: wrapPrice },
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
        </section>
    )
}


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
                data={visibleOrders}
                dataRaw={dataRaw}
                total={visibleOrders.length}
                loading={status === "pending"}
                onFilterUpdate={setTableOptions}
                enablePagination={false}
                properties={[
                    { prop: "klant", title: "Klant", sortable: true },
                    { prop: "aantal", title: "Aantal", sortable: true },
                    { prop: "status", title: "Status", sortable: true },
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

export const Nested: StoryFn = () => {

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({ queryFn: getProductsQuery(), filters: tableOptions });

    return (

        <section className="centered centered--narrow">
            <Datagrid
                toolbarTitle={<Title size="md">Alle orders</Title>}
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
                        { prop: "product", title: "Product", sortable: true },
                        { prop: "categorie", title: "Categorie", sortable: true },
                        { prop: "status", title: "Status", sortable: true },
                        { prop: "merk", title: "Merk", sortable: true },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: wrapPrice },
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
        </section>
    )
}

export const Filter: StoryFn = () => {

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({
        queryFn: getProductsQuery(),
        filters: tableOptions
    });

    const [toggleChecked, setToggleChecked] = useState(true);


    return (

        <section className="centered centered--narrow">
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
                dataRaw={dataRaw}
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
                                optionsSource: (data = []) =>
                                    Array.from(new Set((data || []).map(x => String(x.categorie))))
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
        </section>
    )
}

export const Collapsible: StoryFn = () => {

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({
        queryFn: getProductsQuery(),
        filters: tableOptions
    });

    return (

        <section className="centered centered--narrow">
            <Datagrid
                toolbarTitle={<Title size="md">Alle orders</Title>}
                data={data || []}
                dataRaw={dataRaw}
                total={total || 0}
                loading={status === "pending"}
                onFilterUpdate={setTableOptions}
                rowSingleClickAction={(row) => console.log('Clicked row:', row)}
                rowDoubleClickAction={(row) => console.log('Double click:', row)}
                collapsibleRowData={(row) => (
                    <>
                        <strong>Product:</strong> {row.product}<br />
                        <strong>Categorie:</strong> {row.categorie}<br />
                        <strong>Status:</strong> {row.status}<br />
                        <strong>Prijs:</strong> {row.prijs ? '€' + row.prijs : ''}<br />
                    </>
                )}
                properties={
                    [
                        { prop: "product", title: "Product", sortable: true },
                        { prop: "categorie", title: "Categorie", sortable: true },
                        { prop: "status", title: "Status", sortable: true },
                        { prop: "merk", title: "Merk", sortable: true },
                        { prop: "prijs", title: "Prijs (€)", sortable: false, wrapValue: wrapPrice },
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
        </section>
    )
}

export const All: StoryFn = () => {

    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);
    const [dataRaw, data, total, status] = useTableQueryClientFilter({ queryFn: getProductsQuery(), filters: tableOptions });

    const [toggleChecked, setToggleChecked] = useState(true);

    return (

        <section className="centered centered--narrow">
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
        </section>
    )
}
