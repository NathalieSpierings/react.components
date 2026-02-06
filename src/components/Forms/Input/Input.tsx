import React, { FC, HTMLProps, ReactElement, forwardRef } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../../UI/Icons/Icon/Icon';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'date';
export type InputVariant = 'default' | 'simple';
export type InputAddonVariant = 'before' | 'inline' | 'focus';
export type InputAddonPosition = 'default' | 'right';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'ref'> {
    label?: string;
    infoText?: string;
    placeholder?: string;
    addonIcon?: IconDefinitions;
    addonIconDuotone?: boolean;
    addonVariant?: InputAddonVariant;
    addonPosition?: InputAddonPosition;
    addonIconSize?: SizeDefinitions;
    inline?: boolean;
    color?: ColorDefinitions;
    type?: InputType;
    small?: boolean;
    variant?: InputVariant;
    validationErrorMessage?: string;
    onTextInput?: (val: string) => void;
    autocomplete?: 'off' | 'on';
}

// Let op: Input die verplicht zijn zijn alleen rood tonen als er gevalideerd word. Dit is normaal
// gesproken on button click of als de muis de input verlaat.
export const Input = forwardRef((props: InputProps, ref: React.Ref<any>): ReactElement => {
    const {
        value,
        label,
        infoText,
        inline,
        placeholder = '',
        small,
        addonIcon,
        addonIconDuotone,
        addonVariant,
        addonPosition = 'default',
        addonIconSize,
        type = 'text',
        color,
        variant = 'default',
        validationErrorMessage,
        autocomplete = 'on',
        onTextInput,
        onInput,
        ...rest
    } = props;

    const formGroupCls = [
        'form-group',
        small ? 'form-group--sm' : '',
        variant === 'default' ? '' : 'form-group__simple',
        inline ? 'form-group__inline' : '',
        addonVariant ? `prefix__${addonVariant}` : '',
        color ? `formcontrol-${color}` : '',
        value ? 'floating' : '',
        validationErrorMessage ? 'form-group__invalid' : '',
    ]
        .filter(Boolean)
        .join(' ');

    const formControlCls = [props.className, 'form-control', validationErrorMessage ? 'input-validation-error' : '']
        .filter(Boolean)
        .join(' ');

    return (
        <div className={formGroupCls}>
            {addonIcon && addonVariant != 'focus' ? <Icon icon={addonIcon} size={addonIconSize} duotone={addonIconDuotone} /> : null}

            <input
                className={formControlCls}
                ref={ref}
                type={type}
                value={value}
                placeholder={placeholder}
                autoComplete={autocomplete}
                {...rest}
                onInput={(e) => {
                    onInput?.(e);
                    onTextInput?.((e.target as HTMLInputElement).value);
                }}
            />

            {addonIcon && addonVariant == 'focus' ? <Icon icon={addonIcon} size={addonIconSize} duotone={addonIconDuotone} /> : null}

            {validationErrorMessage ? (
                <span className="field-validation-error">
                    <span>{validationErrorMessage}</span>
                </span>
            ) : null}

            {infoText ? <div className="form-text">{infoText}</div> : null}

            {label ? <label>{label}</label> : null}
        </div>
    );
});

export interface FormInputProps extends Omit<InputProps, 'onChange' | 'value' | 'onBlur' | 'name' | 'onInput'> {
    rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormInput: FC<FormInputProps> = (props) => {
    const { name, control, rules, ...rest } = props;
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, isTouched, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <Input
            ref={field.ref}
            onChange={field.onChange} // send value to hook form
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value || ''} // input value
            name={field.name} // send down the input name
            validationErrorMessage={isTouched && validationErr ? validationErr : undefined}
            {...rest}
        />
    );
};

export interface StaticInputProps {
    label: string;
    value?: string;
    sameLine?: boolean;
    inline?: boolean;
    colon?: boolean;
}

export const StaticInput: FC<StaticInputProps> = ({ label, value, inline, sameLine, colon }) => {
    return (
        <div
            className={`form-group form-group__static  ${inline ? 'form-group__inline' : ''} ${sameLine ? 'form-group__static--inline' : ''}  ${colon ? 'form-group__static--colon' : ''}`}
        >
            <div className="form-control">{value}</div>
            <label>{label}</label>
        </div>
    );
};

export default Input;
