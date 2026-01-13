import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React, { useState } from 'react';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { ColorDefinitions, IconDefinitions } from '../../../../lib/utils/definitions';
import Input, { StaticInput } from '../Input';

const meta: Meta<typeof Input> = {
    title: 'Forms/Input',
    component: Input,
    decorators: [
        (Story) => (
            <div style={{ width: '50vw' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const AddonOnFocus: StoryFn = () => {
    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <Input
                name="lastName"
                label="Lastname"
                onChange={onChangeLastname}
                value={lastName}
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="focus"
            />
        </>
    );
};

export const Default: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    return (
        <Input
            color={ColorDefinitions.Surface}
            name="firstname"
            label="Firstname"
            onChange={onChangeFirstname}
            value={firstName}
        />
    );
};

export const Small: StoryFn = () => {

    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return <Input name="lastName" label="Lastname"
        onChange={onChangeLastname} value={lastName} />;
};

export const Simple: StoryFn = () => {

    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return <Input name="lastName" label="Lastname" onChange={onChangeLastname} value={lastName} variant="simple" />;
};

export const Static: StoryFn = () => {
    return <StaticInput label={'Firstname'} value="John" />;
};

export const StaticWithColon: StoryFn = () => {
    return <StaticInput label={'Firstname'} value="John" colon={true} />;
};

export const StaticInline: StoryFn = () => {
    return <StaticInput label={'Firstname'} value="John" inline={true} />;
};

export const StaticInlineWithColon: StoryFn = () => {
    return <StaticInput label={'Firstname'} value="John" inline={true} colon={true} />;
};

export const Inline: StoryFn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');

    const firstNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const lastnameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
    };

    return (
        <div className="form-inline">
            <Input
                inline={true}
                variant="simple"
                name="firstname"
                label="Firstname"
                onChange={firstNameOnChange}
                value={firstName}
            />
            <Input
                inline={true}
                variant="simple"
                name="lastname"
                label="Lastname"
                onChange={lastnameOnChange}
                value={lastname}
            />
        </div>
    );
};

export const InfoText: StoryFn = () => {

    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return (
        <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            infoText="Your name will be private"
        />
    );
};

export const AddonBefore: StoryFn = () => {
    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <Input
                name="lastName"
                label="Lastname"
                onChange={onChangeLastname}
                value={lastName}
                addonIcon={IconDefinitions.calendar_day}
                addonIconDuotone={true}
                addonVariant="before"
            />
        </>
    );
};

export const AddonInline: StoryFn = () => {
    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <Input
                name="lastName"
                label="Lastname"
                onChange={onChangeLastname}
                value={lastName}
                addonIcon={IconDefinitions.user}
                addonIconDuotone={true}
                addonVariant="inline"
            />
        </>
    );
};

export const Colored: StoryFn = () => {

    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return (
        <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            color={ColorDefinitions.Green}
        />
    );
};

export const Validation: StoryFn = () => {

    const [lastName, setLastName] = useState('');

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    return (
        <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            validationErrorMessage="Field is required"
        />
    );
};

export const Password: StoryFn = () => {
    const [password, setPassword] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return <Input name="password" label="Password" onChange={onChange} value={password} type="password" />;
};

export const AutocompleOn: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    return <Input name="firstname" label="Firstname" onChange={onChange} value={firstName} autoComplete="on" />;
};

export const OnTextInput: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    return <Input name="firstname" label="Firstname" onTextInput={setFirstName} value={firstName} />;
};

export const OnInput: StoryFn = () => {
    const [firstName, setFirstName] = useState('');

    return (
        <Input
            name="firstname"
            label="Firstname"
            onInput={(e) => setFirstName((e.target as HTMLInputElement).value)}
            value={firstName}
        />
    );
};
