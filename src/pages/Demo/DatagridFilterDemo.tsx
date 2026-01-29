import { useQuery } from "@tanstack/react-query";
import "moment/locale/nl";
import React, { ReactElement, useState } from "react";
import { TableRowConfig, Title } from "../../components";
import Datagrid from "../../components/Data/Datagrid/Datagrid";
import { TableGetDataArguments } from "../../components/Data/Table/TableData";
import { ProductGetModel, products } from "../../lib/testdata/models";


const DatagridFilterDemo = (): ReactElement => {


    const [tableOptions, setTableOptions] = useState<TableGetDataArguments<ProductGetModel> | null>(null);

    const { data: resp, status } = useQuery({
        queryKey: ["products", tableOptions],
        queryFn: async (): Promise<[number, ProductGetModel[]]> => {
            if (!tableOptions) {
                return [0, []];
            }

            const { columnFilters, pagination, sort } = tableOptions;

            // map dataset -> ProductGetModel
            let result: ProductGetModel[] = products.map(p => ({
                id: p.id,
                product: p.naam,
                categorie: p.categorie as ProductGetModel["categorie"],
                status: p.status as ProductGetModel["status"],
                merk: p.merk,
                prijs: p.prijs,
                beschikbaarVanaf: new Date(p.beschikbaarVanaf),
            }));

            // filtering (server-side)
            if (columnFilters?.product && typeof columnFilters.product === "string") {
                const value = columnFilters.product.toLowerCase();
                result = result.filter(p =>
                    p.product.toLowerCase().includes(value)
                );
            }

            if (columnFilters?.categorie) {
                result = result.filter(
                    p => p.categorie === columnFilters.categorie
                );
            }

            if (columnFilters?.status) {
                result = result.filter(
                    p => p.status === columnFilters.status
                );
            }

            // sorting (server-side)
            if (sort?.prop) {
                const dir = sort.order === "desc" ? -1 : 1;

                result = [...result].sort((a, b) => {
                    const aVal = a[sort.prop as keyof ProductGetModel];
                    const bVal = b[sort.prop as keyof ProductGetModel];

                    if (aVal instanceof Date && bVal instanceof Date) {
                        return (aVal.getTime() - bVal.getTime()) * dir;
                    }

                    if (typeof aVal === "number" && typeof bVal === "number") {
                        return (aVal - bVal) * dir;
                    }

                    if (typeof aVal === "string" && typeof bVal === "string") {
                        return aVal.localeCompare(bVal) * dir;
                    }

                    return 0;
                });
            }

            // pagination (server-side)
            const total = result.length;

            const page = pagination?.page ?? 1;
            const perPage = pagination?.perPage ?? 25;
            const start = (page - 1) * perPage;

            const paged = result.slice(start, start + perPage);

            //  fake backend latency
            await new Promise(r => setTimeout(r, 300));

            return [total, paged];
        },
        placeholderData: (previousData) => previousData,
    });

    const total = resp?.[0] ?? 0;
    const data = resp?.[1] ?? [];

        const wrapPrice = (item: ProductGetModel) => {
            return <>€  {item.prijs.toFixed(2)}</>
        }

    const columns: TableRowConfig<ProductGetModel>[] = [
        {
            prop: "product",
            title: "Product",
            sortable: true,
            filter: { type: "text" },
        },
        {
            prop: "categorie",
            title: "Categorie",
            sortable: true,
            filter: {
                type: "select",
                options: [
                    { label: "Meubels", value: "Meubels" },
                    { label: "Huishouden", value: "Huishouden" },
                    { label: "Elektronica", value: "Elektronica" },
                    { label: "Kleding", value: "Kleding" },
                    { label: "Boeken", value: "Boeken" },
                ],
            },
        },
        {
            prop: "status",
            title: "Status",
            sortable: true,
            filter: {
                type: "select",
                options: [
                    { label: "Pre-order", value: "Pre-order" },
                    { label: "Op voorraad", value: "Op voorraad" },
                    { label: "Uitverkocht", value: "Uitverkocht" },
                ],
            },
        },
        {
            prop: "prijs",
            title: "Prijs (€)",
            sortable: true,
            wrapValue: wrapPrice,
        },
    ];

    return (
        <div>
            <h2>Server-side Datagrid demo</h2>

            <Datagrid
                filterbarBorderBottom={true}
                toolbarTitle={<Title size="md">Producten</Title>}
                data={data}
                dataRaw={undefined} //geen client-side filtering
                total={total}
                loading={status === "pending"}
                onFilterUpdate={setTableOptions} // filters → server
                properties={columns}
                enablePagination
            />
        </div>
    );
};

export default DatagridFilterDemo;