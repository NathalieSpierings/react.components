import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ColorDefinitions } from "../../lib/utils/definitions";
import { useToastr } from "../../components/Providers/ToastrContext";
import { Button } from "../../components/UI/Button";


const ToastrDemo: React.FC = () => {

    usePageTitle("Toastr", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Toastr", href: "/demo/toastr" },
    ]);

    const { enqueue } = useToastr();


    return (
        <section className="centered centered--wide">
            <h3>Default</h3>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht" }) }} >Show default toastr</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", variant: "positive" }) }} >Show positive toastr</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", variant: "negative" }) }} >Show negative toastr</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", variant: "informational" }) }} >Show informational toastr</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", variant: "warning" }) }} >Show warning toastr</Button>

            <h3>Background</h3>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", background: ColorDefinitions.Purple }) }} >Show toastr with custom background</Button>

            <h3>Positions top</h3>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "top-left" }) }} >Show toastr top left</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "top-center" }) }} >Show toastr top center</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "top-right" }) }} >Show toastr top right</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "top-full" }) }} >Show toastr top full</Button>


            <h3>Positions bottom</h3>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "bottom-left" }) }} >Show toastr top left</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "bottom-center" }) }} >Show toastr top center</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "bottom-right" }) }} >Show toastr top right</Button>
            <Button onClick={() => { enqueue({ message: "Dit is een bericht", position: "bottom-full" }) }} >Show toastr top full</Button>
        </section>
    )
}
export default ToastrDemo;