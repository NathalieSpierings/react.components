import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import RadioButton from '../RadioButton';
import React from 'react';

const meta: Meta<typeof RadioButton> = {
    title: 'Forms/RadioButton',
    component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: StoryFn = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <RadioButton
            value="option1"
            label="Option 1"
            checked={selectedValue === 'option1'}
            onChange={handleRadioChange}
        />
    );
};

export const Disabled: StoryFn = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <RadioButton
            value="option1"
            label="Option 1"
            disabled={true}
            checked={selectedValue === 'option1'}
            onChange={handleRadioChange}
        />
    );
};

export const Colored: StoryFn = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <RadioButton
            value="option1"
            label="I am a required radiobutton"
            color={ColorDefinitions.Magenta}
            checked={selectedValue === 'option1'}
            onChange={handleRadioChange}
        />
    );
};

export const Validation: StoryFn = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <RadioButton
            value="option1"
            label="I am a required radiobutton"
            color={ColorDefinitions.Primary}
            checked={selectedValue === 'option1'}
            onChange={handleRadioChange}
            validationErrorMessage="Field is required."
        />
    );
};

export const RadiobuttonGroup: StoryFn = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <>
            <div>
                <RadioButton
                    value="option1"
                    label="Option 1"
                    name="group1"
                    checked={selectedValue === 'option1'}
                    onChange={handleRadioChange}
                />
                <RadioButton
                    value="option2"
                    label="Option 2"
                    name="group1"
                    checked={selectedValue === 'option2'}
                    onChange={handleRadioChange}
                />
            </div>
            <p>Selected value: {selectedValue}</p>
        </>
    );
};
