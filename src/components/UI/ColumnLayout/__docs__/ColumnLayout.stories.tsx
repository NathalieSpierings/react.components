import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import ColumnLayout from '../ColumnLayout';
import ColumnLayoutAside from '../ColumnLayoutAside';
import { useColumnLayout } from '../ColumnLayoutContext';
import ColumnLayoutHeader from '../ColumnLayoutHeader';
import ColumnLayoutMain from '../ColumnLayoutMain';
import React, { useState } from 'react';
import ColumnLayoutContent from '../ColumnLayoutContent';

const meta: Meta<typeof ColumnLayout> = {
    title: 'Layout/Column layout',
    component: ColumnLayout,
};

export default meta;
type Story = StoryObj<typeof ColumnLayout>;

export const Default: StoryFn = () => {

    const [isShown, setIsShown] = useState(false);

    return (
        <ColumnLayout
            hasAside
            isShown={isShown}
            onToggle={setIsShown}
        >

            <ColumnLayoutAside>

                <ColumnLayoutHeader>
                    <h2>Aside header</h2>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Aside content</p>
                </ColumnLayoutContent>

            </ColumnLayoutAside>

            <ColumnLayoutMain>

                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content</p>
                </ColumnLayoutContent>

            </ColumnLayoutMain>

        </ColumnLayout>
    );
};


export const AsideLeft: StoryFn = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <ColumnLayout
            hasAside
            asidePosition='left'
            isShown={isShown}
            onToggle={setIsShown}
        >

            <ColumnLayoutAside>

                <ColumnLayoutHeader>
                    <h2>Aside header</h2>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Aside content</p>
                </ColumnLayoutContent>

            </ColumnLayoutAside>

            <ColumnLayoutMain>

                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content</p>
                </ColumnLayoutContent>

            </ColumnLayoutMain>

        </ColumnLayout>
    );
};

export const AsideRight: StoryFn = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <ColumnLayout
            hasAside
            asidePosition='right'
            isShown={isShown}
            onToggle={setIsShown}
        >

            <ColumnLayoutAside>

                <ColumnLayoutHeader>
                    <h2>Aside header</h2>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Aside content</p>
                </ColumnLayoutContent>

            </ColumnLayoutAside>

            <ColumnLayoutMain>

                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content</p>
                </ColumnLayoutContent>

            </ColumnLayoutMain>

        </ColumnLayout>
    );
};

export const MainOnly: StoryFn = () => {
   
    return (
        <ColumnLayout>
            <ColumnLayoutMain>
                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content</p>
                </ColumnLayoutContent>
            </ColumnLayoutMain>
        </ColumnLayout>
    );
};


export const PrimaryMain: StoryFn = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <ColumnLayout
            hasAside
            asidePosition='right'
            primary='main'
            isShown={isShown}
            onToggle={setIsShown}
        >

            <ColumnLayoutAside>

                <ColumnLayoutHeader>
                    <h2>Aside header</h2>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Aside content</p>
                </ColumnLayoutContent>

            </ColumnLayoutAside>

            <ColumnLayoutMain>

                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content | Resize me to tablet or mobiel</p>
                </ColumnLayoutContent>

            </ColumnLayoutMain>

        </ColumnLayout>
    );
};

export const PrimaryAside: StoryFn = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <ColumnLayout
            hasAside
            asidePosition='right'
            primary='main'
            isShown={isShown}
            onToggle={setIsShown}
        >

            <ColumnLayoutAside>

                <ColumnLayoutHeader>
                    <h2>Aside header</h2>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Aside content | Resize me to tablet or mobiel</p>
                </ColumnLayoutContent>

            </ColumnLayoutAside>

            <ColumnLayoutMain>

                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content</p>
                </ColumnLayoutContent>

            </ColumnLayoutMain>

        </ColumnLayout>
    );
};

// export const Header: StoryFn = () => {

//     return (
//         <ColumnLayout asidePosition="left">
//             <ColumnLayoutAside>
//                 <ColumnLayoutHeader border={true}
//                     borderColor={ColorDefinitions.Blue}>Aside Header</ColumnLayoutHeader>

//                 <p>Aside content goes here...</p>
//             </ColumnLayoutAside>
//             <ColumnLayoutMain>
//                 <ColumnLayoutHeader border={true}
//                     borderColor={ColorDefinitions.Red}>Main Header</ColumnLayoutHeader>
//                 <div>Main content goes here...</div>
//             </ColumnLayoutMain>
//         </ColumnLayout>
//     );
// };


