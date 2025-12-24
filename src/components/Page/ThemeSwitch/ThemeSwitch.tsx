import React, { FC } from 'react';

export interface ThemeSwitchProps {}
export const themes = ['theme-light', 'theme-dimmed', 'theme-dark'];

const ThemeSwitch: FC<ThemeSwitchProps> = () => {
    const themeSwitch = () => {
        const storedTheme = localStorage.getItem('theme') || 'theme-light';

        let storedIndex = themes.indexOf(storedTheme || '');
        let themeIndex = storedIndex > -1 ? storedIndex : 0;
        let newTheme = themes[(themeIndex + 1) % themes.length];

        const htmlElement = document.querySelector('html') as HTMLElement;

        htmlElement.classList.remove(themes[themeIndex]);
        htmlElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="theme-switcher">
           
            <svg className="icon-duotone" onClick={() => themeSwitch()}>
                <use xlinkHref="#svg_icon_sun" />
            </svg> 
            <svg className="icon-duotone" onClick={() => themeSwitch()}>
                <use xlinkHref="#svg_icon_moon_clouds" />
            </svg>
            <svg className="icon-duotone" onClick={() => themeSwitch()}>
                <use xlinkHref="#svg_icon_moon" />
            </svg>
        </div>
    );
};

export default ThemeSwitch;
