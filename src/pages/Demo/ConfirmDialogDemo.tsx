import React from "react";
import { AlertColorDefinitions } from "../../lib/utils/definitions";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import { useConfirmDialog } from "../../components/Providers/ConfirmDialogContext";
import { Button } from "../../components/UI/Button";

const ConfirmDialogDemo: React.FC = () => {


    usePageTitle("Dialog", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Dialog", href: "/demo/confirm" },
    ]);

    const { enqueue } = useConfirmDialog();
  

    return (
        <section className="centered centered--wide">
        <Button
            onClick={() => {
                enqueue({
                title: "Weet je het zeker?",
                message: "Deze actie kan niet ongedaan worden.",
                variant: "warning",
                confirmLabel: "Ja",
                dismissLabel: "Annuleren",
                confirmAction: async () => {
                    console.log("Bevestigd");
                },
                });
            }}
            >
            Show confirm dialog
            </Button>
        </section>
    )
}
export default ConfirmDialogDemo;