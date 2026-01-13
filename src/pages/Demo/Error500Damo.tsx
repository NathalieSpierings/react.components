import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ErrorPage } from "../../components/Page/ErrorPage";

const Error500Demo: React.FC = () => {

    usePageTitle("Error 500", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Error 500", href: "/demo/error500" },
    ]);

    return (
        <section className="centered centered--wide">
            <ErrorPage errorCode="500" />
        </section>
    )
}

export default Error500Demo;