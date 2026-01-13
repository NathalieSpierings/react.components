import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { ColorDefinitions, IconDefinitions } from '../../../../lib/utils/definitions';
import Select from '../Select';
import React from 'react';

const meta: Meta<typeof Select> = {
    title: 'Forms/Select',
    component: Select,
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '50vw' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: StoryFn = () => {
    return (
        <Select label="Fruits" defaultLabel="Choose an option...">
            <option>Apple</option>
            <option>Pear</option>
            <option>Bananna</option>
        </Select>
    );
};

export const Simple: StoryFn = () => {
    return (
        <Select variant="simple" label="Fruits" defaultLabel="Choose an option...">
            <option>Apple</option>
            <option>Pear</option>
            <option>Bananna</option>
        </Select>
    );
};

export const Inline: StoryFn = () => {
    return (
        <>
            <Select inline={true} label="Fruits" defaultLabel="Choose an option...">
                <option>Apple</option>
                <option>Pear</option>
                <option>Bananna</option>
            </Select>
            <Select inline={true} label="Fruits" defaultLabel="Choose an option...">
                <option>Apple</option>
                <option>Pear</option>
                <option>Bananna</option>
            </Select>
        </>
    );
};

export const InfoText: StoryFn = () => {
    return (
        <Select label="Fruits" defaultLabel="Choose an option..." infoText="Your fruit will be tasty">
            <option>Apple</option>
            <option>Pear</option>
            <option>Bananna</option>
        </Select>
    );
};

export const AddonBefore: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Select
                label="Fruits"
                defaultLabel="Choose an option..."
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="before"
            >
                <option>Apple</option>
                <option>Pear</option>
                <option>Bananna</option>
            </Select>
        </>
    );
};

export const AddonInline: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Select
                label="Fruits"
                defaultLabel="Choose an option..."
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="inline"
            >
                <option>Apple</option>
                <option>Pear</option>
                <option>Bananna</option>
            </Select>
        </>
    );
};

export const AddonOnFocus: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <Select
                label="Fruits"
                defaultLabel="Choose an option..."
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="focus"
            >
                <option>Apple</option>
                <option>Pear</option>
                <option>Bananna</option>
            </Select>
        </>
    );
};

export const Colored: StoryFn = () => {
    return (
        <Select color={ColorDefinitions.Green} label="Fruits" defaultLabel="Choose an option...">
            <option>Apple</option>
            <option>Pear</option>
            <option>Bananna</option>
        </Select>
    );
};

export const Validation: StoryFn = () => {
    return (
        <Select
            validationErrorMessage="Field is required"
            label="Fruits"
            defaultLabel="Choose an option..."
        >
            <option>Apple</option>
            <option>Pear</option>
            <option>Bananna</option>
        </Select>
    );
};
