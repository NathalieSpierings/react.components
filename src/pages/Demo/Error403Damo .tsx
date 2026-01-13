import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ErrorPage } from "../../components/Page/ErrorPage";

const Error403Demo: React.FC = () => {

    usePageTitle("Error 403", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Error 403", href: "/demo/error403" },
    ]);

    return (
        <section className="centered centered--wide">
            <ErrorPage errorCode="403" />
        </section>
    )
}

export default Error403Demo;