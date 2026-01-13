import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ContentItem } from "../../components/UI/ContentItem";

const ContentItemDemo: React.FC = () => {

    usePageTitle("Content item", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Content item", href: "/demo/contentitem" },
    ]);

    return  (
        <ContentItem item={{
            id: '',
            content: <span>Second Column</span>,
            prefix: (<div>First Column</div>),
            postfix: (<div>Third Column</div>),
        }} />
    )  
};

export default ContentItemDemo;