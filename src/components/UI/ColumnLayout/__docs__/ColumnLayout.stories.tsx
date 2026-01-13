import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import ColumnLayout from '../ColumnLayout';
import ColumnLayoutAside from '../ColumnLayoutAside';
import { useColumnLayout } from '../ColumnLayoutContext';
import ColumnLayoutHeader from '../ColumnLayoutHeader';
import ColumnLayoutMain from '../ColumnLayoutMain';
import React from 'react';

const meta: Meta<typeof ColumnLayout> = {
    title: 'Layout/Column layout',
    component: ColumnLayout,
};

export default meta;
type Story = StoryObj<typeof ColumnLayout>;

export const Default: StoryFn = () => {

    return (
        <ColumnLayout>
            <ColumnLayoutAside>
                <ColumnLayoutHeader>Aside Header</ColumnLayoutHeader>

                <p>Aside content goes here...</p>
            </ColumnLayoutAside>
            <ColumnLayoutMain>
                <ColumnLayoutHeader>Main Header</ColumnLayoutHeader>
                <div>Main content goes here...</div>
            </ColumnLayoutMain>
        </ColumnLayout>
    );
};


export const AsideRight: StoryFn = () => {

    return (
        <ColumnLayout asidePosition="right">
            <ColumnLayoutAside>
                <ColumnLayoutHeader>Aside Header</ColumnLayoutHeader>

                <p>Aside content goes here...</p>
            </ColumnLayoutAside>
            <ColumnLayoutMain>
                <ColumnLayoutHeader>Main Header</ColumnLayoutHeader>
                <div>Main content goes here...</div>
            </ColumnLayoutMain>
        </ColumnLayout>
    );
};

export const Header: StoryFn = () => {

    return (
        <ColumnLayout asidePosition="left">
            <ColumnLayoutAside>
                <ColumnLayoutHeader border={true}
                    borderColor={ColorDefinitions.Blue}>Aside Header</ColumnLayoutHeader>

                <p>Aside content goes here...</p>
            </ColumnLayoutAside>
            <ColumnLayoutMain>
                <ColumnLayoutHeader border={true}
                    borderColor={ColorDefinitions.Red}>Main Header</ColumnLayoutHeader>
                <div>Main content goes here...</div>
            </ColumnLayoutMain>
        </ColumnLayout>
    );
};



const AsideButton: React.FC = () => {
    const { showMain } = useColumnLayout();
    return <button onClick={showMain}>Toon Main</button>;
};


export const Toggleable: StoryFn = () => {

    return (
        <ColumnLayout toggleableView={true} asidePosition="left">
            <ColumnLayoutAside>
                <ColumnLayoutHeader>Aside Header</ColumnLayoutHeader>
                <AsideButton />
                <p>Aside content goes here...</p>
            </ColumnLayoutAside>
            <ColumnLayoutMain>
                <ColumnLayoutHeader>Main Header</ColumnLayoutHeader>
                <div>Main content goes here...</div>
            </ColumnLayoutMain>
        </ColumnLayout>
    );
};



export const Single: StoryFn = () => {

    return (
        <ColumnLayout>           
            <ColumnLayoutMain>
                <ColumnLayoutHeader>Main Header</ColumnLayoutHeader>
                <div>Main content goes here...</div>
            </ColumnLayoutMain>
        </ColumnLayout>
    );
};
