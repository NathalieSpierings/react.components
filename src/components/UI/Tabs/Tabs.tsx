import React, { FC, useEffect, useRef } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../Icons/Icon/Icon';


export interface TabsProps {
    tabs: {
        label: string;
        index: number;
        disabled?: boolean;
        iconName?: IconDefinitions;
        iconPosition?: 'left' | 'right';
        iconSize?: SizeDefinitions;
        Component: FC<{ index: number }>;
    }[];
    tabsCss?: string;
    accentColor?: ColorDefinitions;
    selectedTab: number;
    onClick?: (index: number) => void;
    variant?: 'pills' | 'vertical';
}

const Tabs: React.FC<TabsProps> = ({
    tabs = [],
    tabsCss = '',
    accentColor = ColorDefinitions.Primary,
    variant,
    selectedTab = 0,
    onClick,
}) => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const selectorRef = useRef<HTMLDivElement | null>(null);
    const isPills = variant === 'pills';

    useEffect(() => {
        if (isPills && navRef.current && selectorRef.current) {
            const activeTab = navRef.current.querySelector('.tab.active') as HTMLElement;
            if (activeTab) {
                selectorRef.current.style.left = `${activeTab.offsetLeft}px`;
                selectorRef.current.style.width = `${activeTab.offsetWidth}px`;
            }
        }
    }, [selectedTab, isPills, tabs]);

    const handleTabClick = (index: number) => {
        if (onClick && index !== selectedTab) {
            onClick(index);
        }
    };

    const renderTabContent = (tab: TabsProps['tabs'][number]) => {
        if (!tab.iconName) {
            return tab.label;
        }

        const icon = (
            <Icon
                icon={tab.iconName}
                position={tab.iconPosition}
                size={tab.iconSize}
            />
        );

        if (tab.iconPosition === 'right') {
            return (
                <>
                    {tab.label}
                    {icon}
                </>
            );
        }

        return (
            <>
                {icon}
                {tab.label}
            </>
        );
    };

    return (
        <div className={`tabs ${variant ? 'tabs--' + variant : ''} ${tabsCss}`}
            style={
                accentColor
                    ? ({
                        '--color-accent': `var(--color-${accentColor})`,
                    } as React.CSSProperties)
                    : undefined
            }
        >
            <div className="tabs__nav"
                ref={navRef}
                role="tablist"
                aria-orientation={variant === 'vertical' ? 'vertical' : 'horizontal'}
            >
                {isPills && <div ref={selectorRef} className="tabs__nav__selector" />}

                {tabs.map((tab) => (
                    <button
                        key={tab.index}
                        role="tab"
                        tabIndex={0}
                        className={`tab ${tab.disabled ? 'disabled' : ''} ${selectedTab === tab.index ? 'active' : ''}`}
                        onClick={() => !tab.disabled && handleTabClick(tab.index)}
                        disabled={tab.disabled}
                    >
                        <div className="tab__link">{renderTabContent(tab)}</div>
                    </button>
                ))}
            </div>

            <div className="tabs__panes">
                {tabs.map((tab) => (
                    <div key={tab.index}
                        className={`pane ${selectedTab === tab.index ? 'shown' : ''}`}
                    >
                        {selectedTab === tab.index && <tab.Component index={selectedTab} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
