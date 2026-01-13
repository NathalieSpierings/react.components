import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import Avatar, { AvatarDefinitions } from '../Avatar';

import { SvgSprite } from '../../../../assets/SvgSprite';
import { IconDefinitions, SizeDefinitions } from '../../../../lib/utils/definitions';
import { StackedAvatar } from '../Stacked';
import React from 'react';

const meta: Meta<typeof Avatar> = {
    title: 'UI kit/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => {
            return (
                <>
                    <Story />
                    <SvgSprite />
                </>
            );
        },
    ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: StoryFn = (args) => {
    return (
        <div className="row">
            <div className="col-3">
                <Avatar icon={IconDefinitions.user} />
            </div>
            <div className="col-3">
                <Avatar
                    imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    alt="user avatar"
                />
            </div>
            <div className="col-3">
                <Avatar avatar={AvatarDefinitions.Female1} alt="user avatar" />
            </div>
            <div className="col-3">
                <Avatar initials="NS" />
            </div>
        </div>
    );
};

export const Float: StoryFn = (args) => {
    return (
        <div className="row">
            <div className="col-3">
                <Avatar icon={IconDefinitions.user} float={true} />
            </div>
            <div className="col-3">
                <Avatar
                    float={true}
                    imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    alt="user avatar"
                />
            </div>
            <div className="col-3">
                <Avatar avatar={AvatarDefinitions.Female1} alt="user avatar" float={true} />
            </div>
            <div className="col-3">
                <Avatar initials="NS" float={true} />
            </div>
        </div>
    );
};

export const Icon: Story = {
    args: {
        icon: IconDefinitions.user,
    },
};

export const Border: Story = {
    args: {
        icon: IconDefinitions.user,
        border: true,
    },
};
export const Initials: Story = {
    args: {
        initials: 'NS',
    },
};

export const ImageUrl: Story = {
    args: {
        imageUrl:
            'https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg',
    },
};

export const Sizes: StoryFn = () => {
    return (
        <div className="row">
            <div className="col-3">
                <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Tiny} />
                <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraSmall} />
                <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Small} />
                <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Medium} />
                <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Large} />
                <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge} />
                <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge2} />
            </div>
            <div className="col-3">
                <Avatar
                    imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg"
                    size={SizeDefinitions.Tiny}
                />
                <Avatar
                    imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg"
                    size={SizeDefinitions.ExtraSmall}
                />
                <Avatar
                    imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg"
                    size={SizeDefinitions.Small}
                />
                <Avatar
                    imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg"
                    size={SizeDefinitions.Medium}
                />
                <Avatar
                    imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg"
                    size={SizeDefinitions.Large}
                />
                <Avatar
                    imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg"
                    size={SizeDefinitions.ExtraLarge}
                />
                <Avatar
                    imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg"
                    size={SizeDefinitions.ExtraLarge2}
                />
            </div>
            <div className="col-3">
                <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Tiny} />
                <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraSmall} />
                <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Small} />
                <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Medium} />
                <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Large} />
                <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge} />
                <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge2} />
            </div>
            <div className="col-3">
                <Avatar initials="NS" size={SizeDefinitions.Tiny} />
                <Avatar initials="NS" size={SizeDefinitions.ExtraSmall} />
                <Avatar initials="NS" size={SizeDefinitions.Small} />
                <Avatar initials="NS" size={SizeDefinitions.Medium} />
                <Avatar initials="NS" size={SizeDefinitions.Large} />
                <Avatar initials="NS" size={SizeDefinitions.ExtraLarge} />
                <Avatar initials="NS" size={SizeDefinitions.ExtraLarge2} />
            </div>
        </div>
    );
};

export const Square: Story = {
    args: {
        avatar: AvatarDefinitions.Female1,
        square: true,
    },
};

const avatars = [
    <Avatar key="male1" avatar={AvatarDefinitions.Male1} />,
    <Avatar key="female1" avatar={AvatarDefinitions.Female1} />,
    <Avatar key="female4" avatar={AvatarDefinitions.Female4} />,
];

export const Stacked: StoryFn = () => {
    return <StackedAvatar avatars={avatars} counter={6} />;
};

export const BesideText: StoryFn = () => {
    return (

        <div className="avatar__text">
            <Avatar avatar={AvatarDefinitions.Male1} />,
            <div>
                <div className="bold">Jese Leos</div>
                <div className="text-mute">Joined in August 2014</div>
            </div>
        </div>
    );
};
