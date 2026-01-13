import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import Toastr from '../Toastr';
import React from 'react';

const meta: Meta<typeof Toastr> = {
    title: 'UI kit/Toastr',
    component: Toastr,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Toastr>;

export const Default: StoryFn = () => {
    return <></>;
};
