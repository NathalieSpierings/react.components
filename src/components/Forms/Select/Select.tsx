import React, { FC, HTMLProps, forwardRef } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../../UI/Icons/Icon/Icon';
import { InputAddonPosition, InputAddonVariant, InputVariant } from '../Input/Input';

export interface SelectProps extends Omit<HTMLProps<HTMLSelectElement>, 'size' | 'ref'> {
    // Form control props
    variant?: InputVariant;
    color?: ColorDefinitions;
    inline?: boolean;
    infoText?: string;
    addonIcon?: IconDefinitions;
    addonIconDuotone?: boolean;
    addonVariant?: InputAddonVariant;
    addonPosition?: InputAddonPosition;
    addonIconSize?: SizeDefinitions;

    label: string;
    defaultValue?: string;
    defaultLabel: string;
    validationErrorMessage?: string;
}

const Select = forwardRef(
    (
        {
            variant = 'default',
            color,
            inline,
            infoText,
            addonIcon,
            addonIconDuotone = false,
            addonVariant,
            addonPosition = 'default',
            addonIconSize,

            label,
            children,
            defaultLabel,
            onSelect,
            defaultValue = 'defaultValue',
            value,
            validationErrorMessage,
            ...rest
        }: SelectProps,
        ref: React.Ref<any>
    ) => {
        if (!value) {
            value = defaultValue;
        }

        const formGroupCls = [
            'form-group select floating',
            variant === 'default' ? '' : 'form-group__simple',
            inline ? 'form-group__inline' : '',
            addonVariant ? `prefix__${addonVariant}` : '',
            color ? `formcontrol-${color}` : '',

            validationErrorMessage ? 'form-group__invalid' : '',
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div className={formGroupCls}>
                {addonIcon && addonVariant != 'focus' ? <Icon icon={addonIcon} size={addonIconSize} duotone={addonIconDuotone} /> : null}

                <select className="form-control" value={value} onChange={onSelect} ref={ref} {...rest}>
                    <option disabled value={defaultValue}>
                        {defaultLabel}
                    </option>
                    {children}
                </select>

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
    }
);

export interface FormSelectProps extends Omit<SelectProps, 'onChange' | 'value' | 'onBlur' | 'name' | 'onInput'> {
    rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormSelect: FC<FormSelectProps> = ({
    label,
    children,
    defaultLabel,
    onSelect,
    defaultValue = 'defaultValue',
    name,
    control,
    rules,
    ...rest
}) => {
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, isTouched, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <Select
            ref={field.ref}
            onChange={field.onChange} // send value to hook form
            onSelect={field.onChange}
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value || ''} // input value
            name={field.name} // send down the input name
            validationErrorMessage={isTouched && validationErr ? validationErr : undefined}
            label={label}
            defaultLabel={defaultLabel}
            {...rest}
        >
            {children}
        </Select>
    );
};

export default Select;
