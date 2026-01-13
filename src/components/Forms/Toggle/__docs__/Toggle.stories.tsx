import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import Toggle, { FormToggle } from '../Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Forms/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: StoryFn = () => {
    const [checked, onChange] = React.useState(false);

    return (
        <Toggle
            checked={checked}
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            onChange={onChange}
        />
    );
};

export const LabelLeft: StoryFn = () => {
    const [checked, onChange] = React.useState(false);

    return (
        <Toggle
            checked={checked}
            labelPosition="left"
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            onChange={onChange}
        />
    );
};

export const LabelRight: StoryFn = () => {
    const [checked, onChange] = React.useState(false);

    return (
        <Toggle
            checked={checked}
            labelPosition="right"
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            onChange={onChange}
        />
    );
};

export const Colored: StoryFn = () => {
    const [checked, onChange] = React.useState(false);

    return (
        <Toggle
            checked={checked}
            color={ColorDefinitions.Purple}
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            onChange={onChange}
        />
    );
};

export const Validation: StoryFn = () => {
    const [checked, onChange] = React.useState(false);

    return (
        <Toggle
            checked={checked}
            color={ColorDefinitions.Primary}
            validationErrorMessage="Field is required"
            label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
            onChange={onChange}
        />
    );
};

export const Forms: StoryFn = () => {
    const [checked, onChange] = React.useState(false);

    const { control, getValues } = useForm({
        mode: 'all',
        defaultValues: {
            emailBijRapportage: false,
        },
    });

    return (
        <>
            <FormToggle
                color={ColorDefinitions.Primary}
                labelPosition="left"
                label="Ik wil graag een e-mail ontvangen als er rapportage(s) worden toegevoegd:"
                name="emailBijRapportage"
                control={control}
            />
            <button onClick={() => console.log(getValues())}>Show value</button>
        </>
    );
};
