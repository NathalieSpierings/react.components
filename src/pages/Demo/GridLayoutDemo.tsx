import React, { useState } from "react";
import { Button, ContentItem, GridLayout, Icon } from "../../components";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { IconDefinitions } from "../../lib/utils/definitions";

const GridLayoutDemo: React.FC = () => {

    usePageTitle("Grid layout", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Grid layout", href: "/demo/gridlayout" },
    ]);

    const [open, setOpen] = useState<boolean | null>(null);


    return (

        <GridLayout
            open={open}
            openDrawer={setOpen}
            drawerTitle="Filter"
            drawerContent={<div>Content for drawer goes here...</div>}
        >
            <ContentItem item={
                {
                    id: '1',
                    title:
                        <Button onClick={() => setOpen(!open)}>
                            <Icon icon={IconDefinitions.funnel} position="left" />
                            Filter
                        </Button>
                }
            } />
           
           
            I am content
        </GridLayout>

    )
};

export default GridLayoutDemo;