import { Meta, StoryObj } from '@storybook/react-webpack5';
import Collection from '../Collection';
import { IconDefinitions } from '../../../../lib/utils/definitions';
import Icon from '../../Icons/Icon/Icon';
import React from 'react';

const meta = {
    component: Collection,
    title: 'UI Kit/Collection',
} satisfies Meta<typeof Collection>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        items: [
            {
                id: '1',
                title: "Item 1",
                postfix: <Icon icon={IconDefinitions.bin} />
            },
            {
                id: '2',
                title: "Item 1",
                postfix: <Icon icon={IconDefinitions.bin} />
            }
        ],
    },
};

