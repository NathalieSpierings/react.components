import React from "react";
import usePageTitle  from "../lib/hooks/usePageTitle";
import useBreadcrumb  from "../lib/hooks/useBreadcrumb";

const DemoPage: React.FC = () => {

    usePageTitle("Demo Page", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
    ]);
    

    return(
        <p> I am the Demo page</p>
        
    )
}
export default DemoPage;
