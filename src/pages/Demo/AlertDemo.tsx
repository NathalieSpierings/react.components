import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Alert } from "../../components/UI/Alert";

const AlertDemo: React.FC = () => {
    usePageTitle("Alert", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Alert", href: "/demo/alert" },
    ]);

    return (
        <section className="centered centered--wide">
            <h3>Default</h3>
            <Alert shown={true}>
                <p> This is an default message. <a className="link action-link ">More Info.</a></p>
            </Alert>

            <h3>Informational</h3>
            <Alert shown={true} variant="informational">
                <p> This is an informational message. <a className="link action-link">More Info.</a></p>
            </Alert>

            <h3>Positive</h3>
            <Alert shown={true} variant="positive">
                <p> This is an positive message. <a className="link action-link">More Info.</a></p>
            </Alert>

            <h3>Negative</h3>
            <Alert shown={true} variant="negative">
                <p> This is an negative message. <a className="action-link">More Info.</a></p>
            </Alert>

            <h3>Warning</h3>
            <Alert shown={true} variant="warning">
                <p> This is an warning message. <a className="action-link">More Info.</a></p>
            </Alert>


            <h3>Sticky</h3>
            <Alert shown={true} variant="negative" sticky={true}>
                <p> This is an warning message. <a className="action-link">More Info.</a></p>
            </Alert>
        </section>
    )
}
export default AlertDemo;