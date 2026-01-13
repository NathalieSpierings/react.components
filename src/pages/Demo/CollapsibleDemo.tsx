import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Collapsible } from "../../components/UI/Collapsible";

const CollapsibleDemo: React.FC = () => {
    usePageTitle("Collapsible", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Collapsible", href: "/demo/collapsible" },
    ]);
    const [open, setOpen] = React.useState(false);

    return (
        <Collapsible title="Click me!" 
        collapsed={open} 
        setCollapsed={setOpen}>
        Content goes here...
      </Collapsible>
    )
}

export default CollapsibleDemo;