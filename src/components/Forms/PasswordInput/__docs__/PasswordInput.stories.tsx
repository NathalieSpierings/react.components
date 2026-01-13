import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React, { useState } from 'react';
import { SvgSprite } from '../../../../assets/SvgSprite';
import PasswordInput from '../PasswordInput';

const meta: Meta<typeof PasswordInput> = {
    title: 'Forms/Input password',
    component: PasswordInput,
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: StoryFn = () => {
    const [password, setPassword] = useState('');

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <PasswordInput name="password" label="Password" onInput={onInput} value={password} />
        </>
    );
};

export const OnTextInput: StoryFn = () => {
    const [password, setPassword] = useState('');

    return (
        <>
            <SvgSprite />
            <PasswordInput name="password" label="Password" onTextInput={setPassword} value={password} />
        </>
    );
};

export const WithPasswordCheck: StoryFn = () => {
    const [password, setPassword] = useState('');

    const handleKeyUp = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <SvgSprite />
            <PasswordInput
                name="password"
                label="Password"
                value={password}
                usePasswordCheck={true}
                onTextInput={setPassword}
                onKeyUp={() => handleKeyUp}
            />
        </>
    );
};
