import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React, { useState } from 'react';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { ColorDefinitions, IconDefinitions } from '../../../../lib/utils/definitions';
import TextArea from '../TextArea';

const meta: Meta<typeof TextArea> = {
    title: 'Forms/TextArea',
    component: TextArea,
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '70vw' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <TextArea name="firstname" label="Firstname" onChange={onChange} value={firstName} />

    );
};

export const Simple: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <TextArea
            variant="simple"
            name="firstname"
            label="Firstname"
            onChange={onChange}
            value={firstName}
        />
    );
};

export const Inline: StoryFn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');

    const firstNameOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    const lastnameOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLastname(event.target.value);
    };

    return (
        <>
            <TextArea
                inline={true}
                name="firstname"
                label="Firstname"
                onChange={firstNameOnChange}
                value={firstName}
            />
            <TextArea
                inline={true}
                name="lastname"
                label="Lastname"
                onChange={lastnameOnChange}
                value={lastname}
            />
        </>
    );
};

export const InfoText: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <TextArea
            name="firstname"
            label="Firstname"
            onChange={onChange}
            value={firstName}
            infoText="Your name will be private"
        />
    );
};

export const AddonBefore: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <TextArea
                name="firstname"
                label="Firstname"
                onChange={onChange}
                value={firstName}
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="before"
            />
        </>
    );
};

export const AddonInline: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <TextArea
                name="firstname"
                label="Firstname"
                onChange={onChange}
                value={firstName}
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="inline"
            />
        </>
    );
};

export const AddonOnFocus: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <TextArea
                name="firstname"
                label="Firstname"
                onChange={onChange}
                value={firstName}
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="focus"
            />
        </>
    );
};

export const Colored: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <TextArea
            name="firstname"
            label="Firstname"
            onChange={onChange}
            value={firstName}
            color={ColorDefinitions.Green}
        />
    );
};

export const Validation: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <TextArea
            name="firstname"
            label="Firstname"
            onChange={onChange}
            value={firstName}
            validationErrorMessage="Field is required"
        />
    );
};

export const OnTextInput: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    return <TextArea name="firstname" label="Firstname" onTextInput={setFirstName} value={firstName} />;
};
