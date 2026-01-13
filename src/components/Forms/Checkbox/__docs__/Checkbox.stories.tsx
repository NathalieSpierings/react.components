import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import Checkbox from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Forms/Checkbox',
    component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;


export const Default: StoryFn = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Checkbox
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            defaultChecked={true}
            onChange={setChecked}
        />
    );
};
export const NoLabel: StoryFn = () => {
    return (
        <Checkbox defaultChecked={true} onChange={() => { }} />
    );
};

export const Disabled: StoryFn = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Checkbox
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            disabled
            onChange={setChecked}
        />
    );
};

export const Colored: StoryFn = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Checkbox
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            defaultChecked={true}
            color={ColorDefinitions.Violet}
            onChange={setChecked}
        />
    );
};

export const Validation: StoryFn = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Checkbox
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            defaultChecked={true}
            color={ColorDefinitions.Green}
            onChange={setChecked}
            validationErrorMessage="Field is required."
        />
    );
};
