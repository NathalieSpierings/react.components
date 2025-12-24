import moment from 'moment';

import React, { FC, HTMLProps, ReactElement, forwardRef, useState } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import Input, { InputType, InputVariant } from '../Input/Input';
import { ColorDefinitions } from '../../../lib/utils/definitions';

export interface DateInputProps
    extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'ref' | 'type' | 'value' | 'onChange'> {
    value?: Date;
    label?: string;
    placeholder?: string;
    inline?: boolean;
    color?: ColorDefinitions;
    type?: InputType;
    variant?: InputVariant;
    validationErrorMessage?: string;
    onChange: (date: Date | undefined) => void;
}

export const DateInput = forwardRef((props: DateInputProps, ref: React.Ref<any>): ReactElement => {
    let { value, onChange, label, placeholder, inline, color, type = 'date', variant, validationErrorMessage } = props;

    const strVal = value ? moment(value).format('YYYY-MM-DD') : '';
    const [hasBeenUsed, setHasBeenUsed] = useState(false);

    const setDate = (date: string) => {
        try {
            const d = moment(date, 'YYYY-MM-DD').toDate();
            if (d instanceof Date && !isNaN(d.getTime())) {
                onChange(d);
            }
        } catch (e) {
            console.error('Invalid date:', e);
        }
    };

    return (
        <Input
            label={label}
            placeholder={placeholder}
            inline={inline}
            color={color}
            variant={variant}
            validationErrorMessage={validationErrorMessage}
            type={type}
            onKeyUp={() => hasBeenUsed || setHasBeenUsed(true)}
            onChange={(e) => {
                hasBeenUsed || setHasBeenUsed(true);
                setDate((e.target as HTMLInputElement).value);
            }}
            value={strVal}
        />
    );
});
export interface FormDateInputProps extends Omit<DateInputProps, 'onChange' | 'value' | 'onBlur' | 'name'> {
    rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormDateInput: FC<FormDateInputProps> = (props) => {
    const { name, control, rules, ...rest } = props;
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <DateInput
            data-testid="DateInput"
            {...rest}
            ref={field.ref}
            onChange={field.onChange}
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value} // input value
            name={field.name} // send down the input name
            validationErrorMessage={validationErr || undefined}
        />
    );
};

export default DateInput;
