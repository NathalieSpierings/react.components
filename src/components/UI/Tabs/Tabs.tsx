import React, { FC, useRef, useEffect } from "react";
import { IconDefinitions, SizeDefinitions, ColorDefinitions } from "../../../lib/utils/definitions";
import { Icon } from "../Icons/Icon";

export interface TabItem {
    index: number;
    label: string;
    disabled?: boolean;
    iconName?: IconDefinitions;
    iconPosition?: "left" | "right";
    iconSize?: SizeDefinitions;
    Component?: FC<{ index: number }>; // <-- optioneel, voor oude manier
}


export interface TabsProps {
    // tabs: {
    //     label: string;
    //     disabled?: boolean;
    //     iconName?: IconDefinitions;
    //     iconPosition?: "left" | "right";
    //     iconSize?: SizeDefinitions;
    //     Component?: FC<{ index: number }>;
    //     index?: number;
    // }[];
    tabs: TabItem[];
    selectedTab: number;
    onClick?: (index: number) => void;
    variant?: "pills" | "vertical";
    tabsCss?: string;
    tabNavCss?: string;
    placement?: 'default' | 'bottom';
    accentColor?: ColorDefinitions;
    borderBottomColor?: ColorDefinitions;
    renderContent?: boolean; //  render content in dezelfde component (oude stijl)
}

const Tabs: FC<TabsProps> = ({
    tabs,
    selectedTab,
    onClick,
    variant,
    tabsCss = "",
    tabNavCss = '',
    placement = "default",
    accentColor = ColorDefinitions.Primary,
    borderBottomColor = ColorDefinitions.Surface,
    renderContent = false,
}) => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const selectorRef = useRef<HTMLDivElement | null>(null);
    const isPills = variant === "pills";

    useEffect(() => {
        if (isPills && navRef.current && selectorRef.current) {
            const activeTab = navRef.current.querySelector(
                ".tab.active"
            ) as HTMLElement;
            if (activeTab) {
                selectorRef.current.style.left = `${activeTab.offsetLeft}px`;
                selectorRef.current.style.width = `${activeTab.offsetWidth}px`;
            }
        }
    }, [selectedTab, isPills, tabs]);

    const handleClick = (index: number, disabled?: boolean) => {
        if (!disabled && onClick && index !== selectedTab) {
            onClick(index);
        }
    };

    const renderTabContent = (tab: TabsProps["tabs"][number]) => {
        if (!tab.iconName) return tab.label;

        const icon = (
            <Icon
                icon={tab.iconName}
                position={tab.iconPosition}
                size={tab.iconSize}
            />
        );

        return tab.iconPosition === "right" ? (
            <>
                {tab.label}
                {icon}
            </>
        ) : (
            <>
                {icon}
                {tab.label}
            </>
        );
    };

    return (
        <div
            className={`tabs ${variant ? "tabs--" + variant : ""} ${tabsCss} ${placement === "bottom" ? 'tabs--bottom' : ''}`}
            style={
                accentColor
                    ? ({
                        "--color-accent": `var(--color-${accentColor})`,
                    } as React.CSSProperties)
                    : undefined
            }
        >
            <div
                className={`tabs__nav ${borderBottomColor ? 'border-' + borderBottomColor : ''} ${tabNavCss}`}
                ref={navRef}
                role="tablist"
                aria-orientation={variant === "vertical" ? "vertical" : "horizontal"}
            >
                {isPills && <div ref={selectorRef} className="tabs__nav__selector" />}
                {tabs.map((tab) => (
                    <button
                        key={tab.index}
                        role="tab"
                        tabIndex={0}
                        className={`tab ${tab.disabled ? "disabled" : ""} ${selectedTab === tab.index ? "active" : ""}`}
                        onClick={() => handleClick(tab.index, tab.disabled)}
                        disabled={tab.disabled}
                    >
                        <div className="tab__link">{renderTabContent(tab)}</div>
                    </button>
                ))}
            </div>

            {renderContent && (
                <div className="tabs__panes">
                    {tabs.map((tab) => (
                        <div key={tab.index} className={`pane ${selectedTab === tab.index ? "shown" : ""}`}>
                            {selectedTab === tab.index && tab.Component && <tab.Component index={selectedTab} />}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Tabs;


