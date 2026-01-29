import React, { FC, PropsWithChildren, forwardRef, useState } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { ColorDefinitions } from '../../../lib/utils/definitions';

export interface CheckboxProps extends PropsWithChildren {
    id?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    label?: string;
    color?: ColorDefinitions;
    validationErrorMessage?: string;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    css?: string;
}

const Checkbox = forwardRef(
    (
        {
            id,
            checked,
            defaultChecked,
            label,
            color,
            validationErrorMessage,
            disabled = false,
            onChange,
            onBlur,
            css = '',
            children,
        }: CheckboxProps,
        ref: React.Ref<any>
    ) => {
        const [checkedState, setCheckedState] = useState(!!defaultChecked);

        const handleChange = () => {
            if (checked === undefined) {
                setCheckedState(!checkedState);
                onChange?.(!checkedState);
            } else {
                onChange?.(!checked);
            }
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === ' ') {
                event.preventDefault();
                event.stopPropagation();
                handleChange();
            }
        };

        const handleWrapperClick = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (!disabled) handleChange();
        };

        const cls = ['checkbox', css, color ? `formcontrol-${color}` : ''].filter(Boolean).join(' ');

        return (
            <div className="form-field">
                <div className={cls} >
                    <label htmlFor={id}>
                        <span className="sr-only">{label}</span> {/* screen-reader only */}
                        <input
                            id={id}
                            disabled={disabled}
                            type="checkbox"
                            ref={ref}
                            checked={checked ?? checkedState}
                            onKeyDown={disabled ? undefined : handleKeyDown}
                            onChange={(e) => {
                                e.stopPropagation();
                                if (!disabled) {
                                    handleChange();
                                }
                            }}
                            onBlur={onBlur}
                            aria-checked={checked ?? checkedState}
                            aria-disabled={disabled}
                            tabIndex={disabled ? undefined : 0}
                        />
                        <span className="checker">
                            <span className="check"></span>
                        </span>
                    </label>
                    <span>{label}</span>
                </div>
                {validationErrorMessage ? (
                    <span className="field-validation-error">
                        <span>{validationErrorMessage}</span>
                    </span>
                ) : null}

                {children}
            </div>
        );
    }
);

export interface FormCheckboxProps extends Omit<CheckboxProps, 'onChange' | 'checked' | 'ref' | 'onBlurs'> {
    rules?:
    | Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormCheckbox: FC<FormCheckboxProps> = (props) => {
    const { control, rules, name, children, ...rest } = props;
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <Checkbox
            {...rest}
            onChange={field.onChange}
            checked={field.value}
            onBlur={field.onBlur}
            ref={field.ref}
            validationErrorMessage={validationErr}
        >
            {children}
        </Checkbox>
    );
};

export default Checkbox;
