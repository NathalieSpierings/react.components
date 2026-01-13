import React from "react";
import { ColorDefinitions, IconDefinitions } from "../../lib/utils/definitions";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Tooltip } from "../../components/UI/Tooltip";
import { Button } from "../../components/UI/Button";
import { Icon } from "../../components/UI/Icons/Icon";

const TooltipDemo: React.FC = () => {

    usePageTitle("Tooltip", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Tooltip", href: "/demo/tooltip" },
    ]);

    return (
        <section className="centered centered--wide">

            <h3>Tooltip</h3>
            <Tooltip content="I am a tooltip" direction="top">
                <Button color={ColorDefinitions.Olive}  css="mr-1">
                    <Icon icon={IconDefinitions.bulb} position="left" />
                    Hover me!
                </Button>
            </Tooltip>
            <Tooltip content="I am a tooltip" direction="top">
                <Button color={ColorDefinitions.Olive} >
                    <Icon icon={IconDefinitions.bulb} position="left" />
                    Hover me!
                </Button>
            </Tooltip>

            <h3>Directions</h3>
            <div className="row">
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="top-left">
                        Top left
                    </Tooltip>
                </div>
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="top">
                        Top
                    </Tooltip>
                </div>
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="top-right">
                        Top right
                    </Tooltip>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="left">
                        Left
                    </Tooltip>
                </div>
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="right">
                        Right
                    </Tooltip>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="bottom-left">
                        Bottom left
                    </Tooltip>
                </div>
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="bottom">
                        Bottom
                    </Tooltip>
                </div>
                <div className="col-4">
                    <Tooltip content="I am a tooltip" direction="bottom-right">
                        Bottom right
                    </Tooltip>
                </div>
            </div>

            <h3>Color</h3>
            <Tooltip content="I am a tooltip" direction="top" background={ColorDefinitions.Olive}>
                Hover me!
            </Tooltip>

            <h3>Overflow text tooltip</h3>
            <Tooltip content="I am a tooltip" direction="top" overflowTooltip={true}>
                Hover me!
            </Tooltip>
        </section>
    )
};

export default TooltipDemo;