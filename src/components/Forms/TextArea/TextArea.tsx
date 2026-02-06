import { HTMLProps, ReactElement, forwardRef, FC } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../../UI/Icons/Icon/Icon';
import { InputAddonPosition, InputAddonVariant, InputVariant } from '../Input/Input';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import React from 'react';

export interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'size' | 'ref'> {
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
     small?: boolean;
    variant?: InputVariant;
    validationErrorMessage?: string;
    onTextInput?: (val: string) => void;
    autocomplete?: 'off' | 'on';
    cols?: number;
    rows?: number;
}

// TextArea Component
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref): ReactElement => {
    const {
        value,
        label,
        infoText,
        inline,
        placeholder = '',
        addonIcon,
        addonIconDuotone = false,
        addonVariant,
        addonPosition = 'default',
        addonIconSize,
        type = 'text',
        color,
        small,
        variant = 'default',
        validationErrorMessage,
        autocomplete = 'on',
        rows = 8,
        cols = 25,
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

            <textarea
                className={formControlCls}
                ref={ref}
                rows={rows}
                cols={cols}
                value={value}
                placeholder={placeholder}
                autoComplete={autocomplete}
                {...rest}
                onInput={(e) => {
                    onInput?.(e);
                    onTextInput?.((e.target as HTMLTextAreaElement).value);
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


// FormTextArea Component
export interface FormTextAreaProps
    extends Omit<TextAreaProps, "onChange" | "value" | "onBlur" | "name" | "onInput"> {
    rules?: Omit<
        RegisterOptions<FieldValues, string>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
    >;
    control: Control<any, any>;
    name: string;
}

export const FormTextArea: FC<FormTextAreaProps> = (props) => {
    const { name, control, rules, ...rest } = props;
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, isTouched, error } = fieldState;
    const validationErr = invalid ? error?.message || "" : "";

    return (
        <TextArea
            ref={field.ref}
            onChange={field.onChange} // send value to hook form
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value || ""} // input value
            name={field.name} // send down the input name
            validationErrorMessage={
                isTouched && validationErr ? validationErr : undefined
            }
            {...rest}
        />
    );
};

export interface StaticTextAreaProps {
    label: string;
    value?: string;
    sameLine?: boolean;
    inline?: boolean;
    colon?: boolean;
}

export const StaticTextArea: FC<StaticTextAreaProps> = ({ label, value, inline, sameLine, colon }) => {
    return (
        <div
            className={`form-group form-group__static  ${inline ? 'form-group__inline' : ''} ${sameLine ? 'form-group__static--inline' : ''}  ${colon ? 'form-group__static--colon' : ''}`}
        >
            <div className="form-control">
                <div className="form-control__textarea">{value}</div>
            </div>
            <label>{label}</label>
        </div>
    );
};

export default TextArea;