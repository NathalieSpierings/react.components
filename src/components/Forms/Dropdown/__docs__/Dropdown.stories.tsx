import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../../lib/utils/definitions';
import Avatar from '../../../UI/Avatar/Avatar';
import Icon from '../../../UI/Icons/Icon/Icon';
import { Multiselect } from '../../Multiselect';
import Dropdown from '../Dropdown';
import { SvgSprite } from '../../../../assets/SvgSprite';
import React from 'react';

const meta: Meta<typeof Dropdown> = {
    title: 'Forms/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const menuItems = [
    { id: '1', content: 'Profile', onClick: () => alert('Profile clicked') },
    { id: '2', content: 'Settings', onClick: () => alert('Settings clicked') },
    { id: '3', content: 'Logout', onClick: () => alert('Logout clicked') },
];

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
    return <Dropdown menuItems={menuItems} 
    dropdownToggle={{ label: 'Click me!' }}
     />;
};

export const Ghost: StoryFn = () => {
    return (
       <>
        <SvgSprite />
        <Dropdown menuItems={menuItems} 
        dropdownToggle={{ label: 'Click me!', arrow: true, ghost: true }} 
        />
        </>
    )
};

export const DirectionUp: StoryFn = () => {
    return (
        <Dropdown
            direction="up"
            menuItems={menuItems}
            dropdownToggle={{ label: 'Click me!' }}
        />
    )
};

export const Background: StoryFn = () => {
    return (
        <Dropdown
            background={ColorDefinitions.Olive}
            menuItems={menuItems}
            dropdownToggle={{ label: 'Click me!' }}
        />
    );
};

export const CustomContent: StoryFn = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <Dropdown dropdownToggle={{ label: 'Click me!' }} >
            <Multiselect
                background={ColorDefinitions.SurfaceDark}
                title="My label goes here..."
                items={items}
                selected={selected}
                setSelected={setSelected}
                collectionBorderColor={ColorDefinitions.SurfaceDark}
                collectionItemBorder="underlined"
            />
        </Dropdown>
    )
};



export const Header: StoryFn = () => {
    return (
        <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!' }} dropdownHeader={{ content: (<>Welcome <strong>&nbsp; Guest</strong></>) }} />
    );
};

export const HeaderBorder: StoryFn = () => {
    return (
        <Dropdown
            menuItems={menuItems}
            dropdownToggle={{ label: 'Click me!' }}
            dropdownHeader={{
                content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                borderColor: ColorDefinitions.Surface
            }} />
    );
};

export const Divider: StoryFn = () => {
    return (
        <Dropdown
            dropdownToggle={{ label: 'Click me!' }}
            dropdownHeader={{ content: (<>Welcome <strong>&nbsp; Guest</strong></>) }}
            menuItems={[
                { content: "Profile", onClick: () => alert("Profile clicked") },
                { content: "Settings", onClick: () => alert("Settings clicked") },
                { divider: true },
                { content: "Logout", onClick: () => alert("Logout clicked") },
            ]}
        />
    );
};

export const ToggleWithArrow: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Dropdown
                background={ColorDefinitions.Olive}
                menuItems={menuItems}
                dropdownToggle={{ label: 'Click me!', arrow: true }}
            />

        </>
    );
};

export const ToggleIconPrefix: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Dropdown menuItems={menuItems}
                dropdownToggle={{
                    arrow: false,
                    prefix: (<Icon icon={IconDefinitions.ellipsis_h} ring ringSize={"ring-2"} ringColor={ColorDefinitions.Blue} rounded={SizeDefinitions.Full} />)
                }} />
        </>
    );
};


export const ToggleAvatar: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Dropdown menuItems={menuItems}
                dropdownToggle={{
                    label: 'Click me!',
                    prefix: (<Avatar icon={IconDefinitions.user} />)
                }}
            />
        </>
    );
};

export const ToggleAsInput: StoryFn = () => {
    return (
        <Dropdown
            menuItems={menuItems}
            dropdownToggle={{
                renderAsInput: true,
                label: 'Click me!',
            }}
        />
    );
};



export const Prefix: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Dropdown menuItems={[{
                content: 'Menu item one',
                prefix: (<Icon icon={IconDefinitions.star} />),
                onClick: () => console.log('You clicked item 1')
            },
            {
                content: 'Menu item two',
                prefix: (<Icon icon={IconDefinitions.cog} />),
                onClick: () => console.log('You clicked item 2')
            },
            {
                dividerColor: ColorDefinitions.Surface
            },
            {
                content: 'Menu item three',
                prefix: (<Icon icon={IconDefinitions.power} />),
                onClick: () => console.log('You clicked item 3')
            }]} dropdownToggle={{ label: 'Click me!' }} dropdownHeader={{
                content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                borderColor: ColorDefinitions.Surface
            }} />
        </>
    );
};

export const PrefixAccent: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Dropdown
                dropdownToggle={{ label: 'Click me!' }}
                dropdownHeader={{
                    content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                    borderColor: ColorDefinitions.Surface
                }}
                menuItems={[{
                    content: 'Menu item one',
                    prefix: (<span><Icon icon={IconDefinitions.star} color={ColorDefinitions.Violet} /></span>),
                    onClick: () => console.log('You clicked item 1')
                },
                {
                    content: 'Menu item two',
                    prefix: (<span><Icon icon={IconDefinitions.cog} color={ColorDefinitions.Violet} /></span>),
                    onClick: () => console.log('You clicked item 2')
                },
                {
                    dividerColor: ColorDefinitions.Violet
                },
                {
                    content: 'Menu item three',
                    prefix: (<span><Icon icon={IconDefinitions.power} color={ColorDefinitions.Violet} /></span>),
                    onClick: () => console.log('You clicked item 3')
                }]}
            />
        </>
    );
};


export const Postfix: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Dropdown
                menuItems={[
                    {
                        content: 'Menu item one',
                        postfix: <Icon icon={IconDefinitions.star} />,
                        onClick: () => console.log('You clicked item 1'),
                    },
                    {
                        content: 'Menu item two',
                        postfix: <Icon icon={IconDefinitions.cog} />,
                        onClick: () => console.log('You clicked item 2'),
                    },
                    {
                        dividerColor: ColorDefinitions.Surface,
                    },
                    {
                        content: 'Menu item three',
                        postfix: <Icon icon={IconDefinitions.power} />,
                        onClick: () => console.log('You clicked item 3'),
                    },
                ]}
                dropdownToggle={{ label: 'Click me!' }}
                dropdownHeader={{
                    content: (
                        <>
                            Welcome <strong>&nbsp; Guest</strong>
                        </>
                    ),
                    borderColor: ColorDefinitions.Surface,
                }}
            />
        </>
    );
};

export const PostfixAccent: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Dropdown menuItems={[{
                content: 'Menu item one',
                postfix: (<span><Icon icon={IconDefinitions.star} color={ColorDefinitions.Violet} /></span>),
                onClick: () => console.log('You clicked item 1')
            },
            {
                content: 'Menu item two',
                postfix: (<span><Icon icon={IconDefinitions.cog} color={ColorDefinitions.Violet} /></span>),
                onClick: () => console.log('You clicked item 2')
            },
            {
                dividerColor: ColorDefinitions.Surface
            },
            {
                content: 'Menu item three',
                postfix: (<span><Icon icon={IconDefinitions.power} color={ColorDefinitions.Violet} /></span>),
                onClick: () => console.log('You clicked item 3')
            }]}
                dropdownToggle={{ label: 'Click me!' }}
                dropdownHeader={{
                    content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                    borderColor: ColorDefinitions.Surface
                }} />
        </>
    );
};
