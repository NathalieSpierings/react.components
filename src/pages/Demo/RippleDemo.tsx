import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ColorDefinitions } from "../../lib/utils/definitions";
import { Button } from "../../components/UI/Button";

const RippleDemo: React.FC = () => {
    usePageTitle("Ripple effect", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Ripple effect", href: "/demo/ripple" },
    ]);

    return (
        <section className="centered centered--wide">
            <h3>Default</h3>
            <Button >Ripple it!</Button>


            <h3>Color from color difinition</h3>
            <Button variant="flat" color={ColorDefinitions.Blue} rippleColor={ColorDefinitions.Blue}>Now its blue!</Button>

            <h3>Hex color</h3>
            <Button variant="flat" color={ColorDefinitions.Red} rippleColor="#D6402E">Now its red!</Button>


           


        </section>
    )
}
export default RippleDemo;