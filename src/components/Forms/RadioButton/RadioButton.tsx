import React, { FC, forwardRef, PropsWithChildren } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { ColorDefinitions } from '../../../lib/utils/definitions';

export interface RadioButtonProps extends PropsWithChildren {
    name?: string;
    label?: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    color?: ColorDefinitions;
    validationErrorMessage?: string;
    onChange?: (value: string) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const RadioButton = forwardRef(
    (
        {
            name,
            label,
            value,
            checked,
            disabled,
            color,
            validationErrorMessage,
            onChange,
            onBlur,
            children,
        }: RadioButtonProps,
        ref: React.Ref<any>
    ) => {
        const handleChange = () => {
            onChange?.(value);
        };

        return (
            <div className="form-field">
                <div className={`radio ${color ? "formcontrol-" + color : null}`}>
                    <label htmlFor={name}>
                        <span className="sr-only">{label}</span> {/* screen-reader only */}
                        <input
                            ref={ref}
                            type="radio"
                            name={name}
                            value={value}
                            disabled={disabled}
                            checked={checked}
                            onChange={handleChange}
                        />
                        <span className="checker">
                            <span className="check"></span>
                        </span>
                    </label>
                    <div> {label}</div>
                </div>

                {validationErrorMessage ? (
                    <span className="field-validation-error">
                        <span className="">{validationErrorMessage}</span>
                    </span>
                ) : null}

                {children}
            </div>
        );
    }
);

export interface FormRadioProps extends Omit<RadioButtonProps, 'onChange' | 'checked' | 'ref' | 'onBlurs'> {
    rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormRadio: FC<FormRadioProps> = (props) => {
    const { control, rules, name, children, ...rest } = props;
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <RadioButton
            {...rest}
            onChange={field.onChange}
            checked={field.value}
            onBlur={field.onBlur}
            ref={field.ref}
            validationErrorMessage={validationErr}
        >
            {children}
        </RadioButton>
    );
};

export default RadioButton;
