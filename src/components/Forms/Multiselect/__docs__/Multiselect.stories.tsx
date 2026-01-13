import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { ColorDefinitions, SizeDefinitions } from '../../../../lib/utils/definitions';
import Dropdown from '../../Dropdown/Dropdown';
import Multiselect from '../Multiselect';
import React from 'react';

const meta: Meta<typeof Multiselect> = {
    title: 'Forms/Multiselect',
    component: Multiselect,
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<typeof Multiselect>;

const items = [
    {
        id: '1',
        content: 'Option 1',
        postfix: <small>54949881</small>,
    },
    {
        id: '2',
        content: 'Option 2',
        postfix: <small>54949882</small>,
    },
    {
        id: '3',
        content: 'Option 3',
        postfix: <small>54949883</small>,
    },
    {
        id: '4',
        content: 'Option 4',
        postfix: <small>54949884</small>,
    },
    {
        id: '5',
        content: 'Option 5',
        postfix: <small>54949885</small>,
    },
];

export const Default: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return <Multiselect title="My label goes here..." items={items} selected={selected} setSelected={setSelected} />;
};

export const Bordered: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Multiselect
            background={ColorDefinitions.SurfaceDark}
            title="My label goes here..."
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.SurfaceDark}
            collectionItemBorder="bordered"
        />
    );
};

export const InsideDropdown: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Dropdown
            background={ColorDefinitions.Surface}
            dropdownToggle={{
                label: 'click me',
            }}
        >
            <Multiselect
                background={ColorDefinitions.Theme100}
                borderColor={ColorDefinitions.Theme100}
                title="My label goes here..."
                items={items}
                selected={selected}
                setSelected={setSelected}
                collectionBorderColor={ColorDefinitions.Theme100}
                collectionItemBorder="underlined"
            />
        </Dropdown>
    );
};

export const Background: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Multiselect
            background={ColorDefinitions.Olive}
            borderColor={ColorDefinitions.Olive}
            title="My label goes here..."
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.Olive}
            collectionItemBorder="underlined"
        />
    );
};

export const NoTitle: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Multiselect
            background={ColorDefinitions.Theme100}
            borderColor={ColorDefinitions.Theme100}
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.Theme100}
            collectionItemBorder="underlined"
        />
    );
};

export const NoCheckAll: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Multiselect
            background={ColorDefinitions.Theme100}
            borderColor={ColorDefinitions.Theme100}
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.Theme100}
            collectionItemBorder="underlined"
            showCheckAll={false}
        />
    );
};

export const NoSearch: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Multiselect
            background={ColorDefinitions.Theme100}
            borderColor={ColorDefinitions.Theme100}
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.Theme100}
            collectionItemBorder="underlined"
            showSearch={false}
        />
    );
};

export const NoHeader: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Multiselect
            background={ColorDefinitions.Theme100}
            borderColor={ColorDefinitions.Theme100}
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.Theme100}
            collectionItemBorder="underlined"
            showHeader={false}
        />
    );
};

export const Rounded: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Multiselect
            background={ColorDefinitions.Theme100}
            borderColor={ColorDefinitions.Theme100}
            title="My label goes here..."
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.Theme100}
            collectionItemBorder="underlined"
            rounded={SizeDefinitions.ExtraLarge}
        />
    );
};
