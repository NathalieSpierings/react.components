import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { DividerSplitted } from "../../components/UI/DividerSplitted";

const DividerDemo: React.FC = () => {

    usePageTitle("Divider", []);
    
      useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Divider", href: "/demo/divider" },
      ]);
      
    return(
        <section className="centered centered--wide">
            <DividerSplitted label="I am a label" />
        </section>
    )
}
export default DividerDemo;