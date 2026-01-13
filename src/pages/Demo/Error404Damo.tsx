import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ErrorPage } from "../../components/Page/ErrorPage";

const Error404Demo: React.FC = () => {

    usePageTitle("Error 404", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Error 404", href: "/demo/error404" },
    ]);

    return (
        <section className="centered centered--wide">
            <ErrorPage errorCode="404" />
        </section>
    )
}

export default Error404Demo;