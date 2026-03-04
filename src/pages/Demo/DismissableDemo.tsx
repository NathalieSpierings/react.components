import React, { useState } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import DismissableBox from "../../components/UI/DismissableBox/DismissableBox";
import { ColorDefinitions } from "../../lib/utils/definitions";

const DissmissableBoxDemo: React.FC = () => {
    usePageTitle("Alert", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Dissmissable box", href: "/demo/dismissable-box" },
    ]);

    const [openDefault, setDefaultOpen] = useState(true);
    const [open, setOpen] = useState(true);
    const [dismissbuttonVisible, setDismissbuttonVisible] = useState(false);

    return (
        <section className="centered centered--wide">
            <h3>Default</h3>
            <DismissableBox isOpen={openDefault} onClose={() => setDefaultOpen(false)}>
                I am dismissable box content.
            </DismissableBox>


            <h3>Header content</h3>
            <DismissableBox borderColor={ColorDefinitions.SurfaceDark} isOpen={openDefault} onClose={() => setDefaultOpen(false)} headerContent="I am header">
                I am dismissable box content.
            </DismissableBox>


            <h3 className="mt-4">Dismiss not visible</h3>
            <DismissableBox borderColor={ColorDefinitions.SurfaceDark}  isOpen={open} onClose={() => setOpen(false)} dismissbuttonVisible={!open}>
                I am dismissable box content.
            </DismissableBox>


             <h3 className="mt-4">Dismiss button visible on action</h3>
            <DismissableBox borderColor={ColorDefinitions.SurfaceDark} isOpen={open} onClose={() => setOpen(false)} dismissbuttonVisible={dismissbuttonVisible}>
                I am dismissable box content. <button onClick={() => setDismissbuttonVisible(true)}>Click me</button>
            </DismissableBox>

        </section>
    )
}
export default DissmissableBoxDemo;