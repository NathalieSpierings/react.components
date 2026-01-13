import React, { useState } from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import DateInput from '../DateInput';
import moment from 'moment';

const meta: Meta<typeof DateInput> = {
    title: 'Forms/DateInput',
    component: DateInput,
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: StoryFn = () => {
    const [startdatum, setStartdatum] = useState(new Date());

    return (
        <>
            <DateInput label="Startdatum" value={startdatum} onChange={(d) => setStartdatum(d!)} />
            <div id="msg">Startdatum is: {moment(startdatum).format('DD-MM-YYYY')}</div>
        </>
    );
};

export const Simple: StoryFn = () => {
    const [startdatum, setStartdatum] = useState(new Date());

    return (
        <>
            <DateInput label="Startdatum" variant="simple" value={startdatum} onChange={(d) => setStartdatum(d!)} />
            <div id="msg">Startdatum is: {moment(startdatum).format('DD-MM-YYYY')}</div>
        </>
    );
};

export const Validation: StoryFn = () => {
    const [startdatum, setStartdatum] = useState(new Date());

    return (
        <>
            <DateInput
                label="Startdatum"
                value={startdatum}
                onChange={(d) => setStartdatum(d!)}
                validationErrorMessage="Field is required"
            />
            <div id="msg">Startdatum is: {moment(startdatum).format('DD-MM-YYYY')}</div>
        </>
    );
};
