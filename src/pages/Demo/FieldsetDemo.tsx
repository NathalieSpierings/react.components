import React from "react";
import { ColorDefinitions, SizeDefinitions } from "../../lib/utils/definitions";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Fieldset } from "../../components/Typography/Fieldset";

const FieldsetDemo: React.FC = () => {

    usePageTitle("Fiieldset", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Fieldset", href: "/demo/fieldset" },
    ]);

    return (
        <section className="centered centered--wide">

            <h2>Bordered</h2>
            <div className="grid2">
                <Fieldset borderColor={ColorDefinitions.Surface}>
                    <i>I can be  used as an alinea of text.</i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
                <Fieldset borderColor={ColorDefinitions.Surface} rounded={SizeDefinitions.ExtraLarge}>
                    <i>I can be  used as an alinea of text with the legend as title.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
            </div>

            <h2>Background</h2>
            <div className="grid2">
                <Fieldset background={ColorDefinitions.SurfaceDark}>
                    <i>I can be  used as an alinea of text.</i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
                <Fieldset background={ColorDefinitions.SurfaceDark} rounded={SizeDefinitions.ExtraLarge}>
                    <i>I can be  used as an alinea of text with the legend as title.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
            </div>


            <h2>Surfaces</h2>
            <div className="grid2">
                <Fieldset background={ColorDefinitions.SurfaceDark}>
                    <i>I can be  used as an alinea of text.</i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
                <Fieldset background={ColorDefinitions.SurfaceLight}>
                    <i>I can be  used as an alinea of text with the legend as title.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
            </div>


            <h2>Bordered</h2>
            <div className="grid2">
                <Fieldset borderColor={ColorDefinitions.Surface}>
                    <i>I can be  used as an alinea of text.</i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
                <Fieldset borderColor={ColorDefinitions.Surface} legend="Legend">
                    <i>I can be  used as an alinea of text with the legend as title.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
            </div>

            <h2>Rounded border</h2>
            <div className="grid2">
                <Fieldset borderColor={ColorDefinitions.Surface} rounded={SizeDefinitions.ExtraLarge}>
                    <i>I can be  used as an alinea of text.</i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
                <Fieldset legend="Legend" borderColor={ColorDefinitions.Surface} rounded={SizeDefinitions.ExtraLarge}>
                    <i>I can be  used as an alinea of text with the legend as title.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
            </div>


            <h2>Legend with border</h2>
            <div className="grid2">

                <Fieldset legend="Legend" legendBorderColor={ColorDefinitions.Surface}>
                    <i>I can be  used as an alinea of text with the legend as title.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
            </div>

            <h2>Legend </h2>
            <div className="grid2">

                <Fieldset legend="Legend" >
                    <i>I can be  used as an alinea of text with the legend as title.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Fieldset>
            </div>


        </section>
    )
}
export default FieldsetDemo;