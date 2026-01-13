import React from "react";
import { ColorDefinitions } from "../../lib/utils/definitions";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Accordion, AccordionSection } from "../../components/UI/Accordion";
const AccordionDemo: React.FC = () => {

    usePageTitle("Accordion", []);
    
      useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Accordion", href: "/demo/accordion" },
      ]);
      
    return (
        <section className="centered centered--wide">

            <div className="mb-5">
                <h3>Default</h3>
                <Accordion>
                    <AccordionSection title="Accordion Item #1">
                        <p>
                            <em>The Art of Slowing Down</em>
                        </p>
                        <p>
                            In a world that constantly demands more of our attention, learning
                            the art of slowing down has become a lost skill. We rush through
                            tasks, multitask to exhaustion, and measure success in moments of
                            frenetic activity. Yet, it is in the stillness that we often find
                            our greatest insights. Slowing down doesn’t mean being idle; rather,
                            it’s about giving ourselves permission to breathe, to notice, and to
                            appreciate the subtle beauty in the world around us. By embracing
                            moments of calm and reflection, we allow ourselves the space to
                            recharge and live more intentionally.
                        </p>
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #2">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #3">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #4">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                </Accordion>
            </div>


            <div className="bg-surface-dark p-5 mb-5">
                <h3>Surface dark</h3>
                <Accordion>
                    <AccordionSection title="Accordion Item #1">
                        <p>
                            <em>The Art of Slowing Down</em>
                        </p>
                        <p>
                            In a world that constantly demands more of our attention, learning
                            the art of slowing down has become a lost skill. We rush through
                            tasks, multitask to exhaustion, and measure success in moments of
                            frenetic activity. Yet, it is in the stillness that we often find
                            our greatest insights. Slowing down doesn’t mean being idle; rather,
                            it’s about giving ourselves permission to breathe, to notice, and to
                            appreciate the subtle beauty in the world around us. By embracing
                            moments of calm and reflection, we allow ourselves the space to
                            recharge and live more intentionally.
                        </p>
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #2">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #3">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #4">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                </Accordion>
            </div>


            <div className="bg-surface-light p-5 mb-5">
                <h3>Surface light</h3>
                <Accordion>
                    <AccordionSection title="Accordion Item #1">
                        <p>
                            <em>The Art of Slowing Down</em>
                        </p>
                        <p>
                            In a world that constantly demands more of our attention, learning
                            the art of slowing down has become a lost skill. We rush through
                            tasks, multitask to exhaustion, and measure success in moments of
                            frenetic activity. Yet, it is in the stillness that we often find
                            our greatest insights. Slowing down doesn’t mean being idle; rather,
                            it’s about giving ourselves permission to breathe, to notice, and to
                            appreciate the subtle beauty in the world around us. By embracing
                            moments of calm and reflection, we allow ourselves the space to
                            recharge and live more intentionally.
                        </p>
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #2">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #3">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                    <AccordionSection title="Accordion Item #4">
                        Sed ut perspiciatis unde omnis iste ...
                    </AccordionSection>
                </Accordion>
            </div>


            <h3>OpenIndex</h3>
            <Accordion defaultOpenIndex={2}>
                <AccordionSection title="Accordion Item #1">
                    <p>
                        <em>The Art of Slowing Down</em>
                    </p>
                    <p>
                        In a world that constantly demands more of our attention, learning
                        the art of slowing down has become a lost skill. We rush through
                        tasks, multitask to exhaustion, and measure success in moments of
                        frenetic activity. Yet, it is in the stillness that we often find
                        our greatest insights. Slowing down doesn’t mean being idle; rather,
                        it’s about giving ourselves permission to breathe, to notice, and to
                        appreciate the subtle beauty in the world around us. By embracing
                        moments of calm and reflection, we allow ourselves the space to
                        recharge and live more intentionally.
                    </p>
                </AccordionSection>
                <AccordionSection title="Accordion Item #2">
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
                <AccordionSection title="Accordion Item #3">
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
                <AccordionSection title="Accordion Item #4">
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
            </Accordion>

            <h3>AllCollapsed</h3>
            <Accordion defaultOpenIndex={-1}>
                <AccordionSection title="Accordion Item #1">
                    <p>
                        <em>The Art of Slowing Down</em>
                    </p>
                    <p>
                        In a world that constantly demands more of our attention, learning
                        the art of slowing down has become a lost skill. We rush through
                        tasks, multitask to exhaustion, and measure success in moments of
                        frenetic activity. Yet, it is in the stillness that we often find
                        our greatest insights. Slowing down doesn’t mean being idle; rather,
                        it’s about giving ourselves permission to breathe, to notice, and to
                        appreciate the subtle beauty in the world around us. By embracing
                        moments of calm and reflection, we allow ourselves the space to
                        recharge and live more intentionally.
                    </p>
                </AccordionSection>
                <AccordionSection title="Accordion Item #2">
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
                <AccordionSection title="Accordion Item #3" >
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
                <AccordionSection title="Accordion Item #4">
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
            </Accordion>

            <h3>Background</h3>
            <Accordion headerBackground={ColorDefinitions.Olive30} contentBackground={ColorDefinitions.Olive} accentColor={ColorDefinitions.Green}>
                <AccordionSection title="Accordion Item #1">
                    <p>
                        <em>The Art of Slowing Down</em>
                    </p>
                    <p>
                        In a world that constantly demands more of our attention, learning
                        the art of slowing down has become a lost skill. We rush through
                        tasks, multitask to exhaustion, and measure success in moments of
                        frenetic activity. Yet, it is in the stillness that we often find
                        our greatest insights. Slowing down doesn’t mean being idle; rather,
                        it’s about giving ourselves permission to breathe, to notice, and to
                        appreciate the subtle beauty in the world around us. By embracing
                        moments of calm and reflection, we allow ourselves the space to
                        recharge and live more intentionally.
                    </p>
                </AccordionSection>
                <AccordionSection title="Accordion Item #2">
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
                <AccordionSection title="Accordion Item #3" >
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
                <AccordionSection title="Accordion Item #4">
                    Sed ut perspiciatis unde omnis iste ...
                </AccordionSection>
            </Accordion>
        </section>
    )
}
export default AccordionDemo;