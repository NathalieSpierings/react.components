import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { Alert, Breadcrumb, Button, Card, Collection, ColumnLayout, ColumnLayoutAside, ColumnLayoutHeader, ColumnLayoutMain, ContentItem, Subtitle, Title, useLayoutContext } from "../components";
import { ColorDefinitions } from "../lib/utils/definitions";

function extractKlantnummer(fileName: string): string | null {
    const match = /#(\d{4})(?=\.[^.#]+$)/.exec(fileName);
    return match ? match[1] : null;
}

function groupFilesByKlantnummer(files: File[]): Record<string, File[]> {
    return files.reduce((groups, file) => {

        const organisatieId = extractKlantnummer(file.name);
        if (!organisatieId)
            return groups;

        if (!groups[organisatieId]) {
            groups[organisatieId] = [];
        }

        groups[organisatieId].push(file);

        return groups;

    }, {} as Record<string, File[]>);
}

const HomePage = (): ReactElement => {

    const { setFullscreen, setShowHeader, setHasSidebars, setShowSidebarMobile } = useLayoutContext();

    useEffect(() => {
        setFullscreen(true);
        setShowHeader(false);
        setHasSidebars(true);
        setShowSidebarMobile(true);
        return () => {
            setFullscreen(false);
            setShowHeader(true);
            setHasSidebars(true);
            setShowSidebarMobile(true);
        };
    }, [setFullscreen, setShowHeader, setHasSidebars, setShowSidebarMobile]);



    const title = "Bulkupload"
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Bulkupload", href: "/bulkupload" },
    ];
    
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const groupedFiles = useMemo(() => groupFilesByKlantnummer(selectedFiles), [selectedFiles]);

    const invalidFiles = useMemo(() => {
        return selectedFiles.filter((file) => extractKlantnummer(file.name) === null);
    }, [selectedFiles]);

    const save = async () => {

    }


    return (
        <ColumnLayout asidePosition={selectedFiles.length > 0 ? "right" : undefined}>

            {selectedFiles.length > 0 && (
                <ColumnLayoutAside>
                    <ColumnLayoutHeader>
                        <ContentItem item={{
                            id: 'asideHeaderContent',
                            content: (<Title>Bestanden per klantnummer</Title>)
                        }} />
                    </ColumnLayoutHeader>

                    {invalidFiles.length > 0 && (
                        <>
                            <Alert dismissable={false} variant="negative" alertCss="mt-3">
                                <p>
                                    Bestanden moeten eindigen op #klantnummer! (<code>bijv. rapportage#1234.pdf</code>)
                                    <br />
                                    De volgende bestandsnamen zijn ongeldig en worden niet geüpload:
                                </p>
                            </Alert>

                            <Card
                                background={ColorDefinitions.Surface}
                                borderColor={ColorDefinitions.Surface}
                                fluidContent={true}
                                cardCss="mb-5"
                                title={<Subtitle>Ongeldige bestanden</Subtitle>}
                                headerBoxProps={{
                                    borderColor: ColorDefinitions.Surface
                                }}
                            >
                                <Collection
                                    items={invalidFiles.map((file) => ({
                                        id: file.name,
                                        title: file.name,
                                    }))}
                                    itemBorder="underlined" borderColor={ColorDefinitions.Surface} />
                            </Card>
                        </>
                    )}


                    {Object.keys(groupedFiles).length > 0 && (
                        Object.entries(groupedFiles).map(([organisatieId, files]) => {
                            const currentFiles = files.map((x) => ({
                                id: `${organisatieId}-${x.name}`,
                                title: x.name,
                            }));

                            return (

                                <Card key={organisatieId}
                                    background={ColorDefinitions.Theme400}
                                    fluidContent={true}
                                    cardCss="mb-3"
                                    title={<Title size="sm">{organisatieId}</Title>}
                                    headerBoxProps={{
                                        background: ColorDefinitions.Theme500
                                    }}
                                >
                                    <Collection items={currentFiles} itemBorder="underlined" borderColor={ColorDefinitions.SurfaceDark} />
                                </Card>
                            );
                        })
                    )}

                </ColumnLayoutAside>
            )}

            <ColumnLayoutMain>
                <ColumnLayoutHeader>
                    <ContentItem item={{
                        id: 'mainHeaderContent',
                        content: (
                            <>
                                <Title>{title}</Title>

                                {breadcrumbItems.length > 0 ?
                                    <Breadcrumb items={breadcrumbItems} />
                                    : null}
                            </>
                        ),
                        postfix: (
                            <Button onClick={save} shadow={true} color={ColorDefinitions.Primary} >
                                Opslaan
                            </Button>
                        )
                    }} />
                </ColumnLayoutHeader>
            </ColumnLayoutMain>


        </ColumnLayout>
    )
}

export default HomePage;