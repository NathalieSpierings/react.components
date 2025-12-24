import React, { FC, PropsWithChildren, useState } from 'react';
import { ColorDefinitions } from '../../../lib/utils/definitions';
import InternalSection, { ExternalAccordionSectionProps } from './AccordionSection';

export const AccordionSection: React.FC<ExternalAccordionSectionProps> = ({ children }) => <>{children}</>;

export interface AccordionProps extends PropsWithChildren {
    defaultOpenIndex?: number;
    accordionCss?: string;
    headerBackground?: ColorDefinitions;
    contentBackground?: ColorDefinitions;
    accentColor?: ColorDefinitions;
}

const Accordion: FC<AccordionProps> = ({
    accordionCss = '',
    headerBackground,
    contentBackground,
    defaultOpenIndex = 0,
    accentColor,
    children,
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(defaultOpenIndex);

    const sectionsWithInjectedProps = React.Children.map(children, (child, index) => {
        if (
            !React.isValidElement<ExternalAccordionSectionProps>(child) ||
            typeof child.type !== 'function' ||
            child.type.name !== InternalSection.name
        ) {
            return null;
        }

        const JSXProps = child.props;
        const isActive = index === activeIndex;

        return (
            <InternalSection
                index={index}
                isActive={isActive}
                setActiveIndex={setActiveIndex}
                title={JSXProps.title}
                headerBackground={headerBackground}
                contentBackground={contentBackground}
            >
                {React.cloneElement(child)}
            </InternalSection>
        );
    });

    return (
        <div
            className={`accordion ${accordionCss}`}
            role="tablist"
            style={
                accentColor
                    ? ({
                          '--accordion-accent': `var(--color-${accentColor})`,
                      } as React.CSSProperties)
                    : undefined
            }
        >
            {sectionsWithInjectedProps}
        </div>
    );
};

export default Accordion;
