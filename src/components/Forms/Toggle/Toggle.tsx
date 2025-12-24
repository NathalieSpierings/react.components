import React, { FC, PropsWithChildren, forwardRef } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { ColorDefinitions } from '../../../lib/utils/definitions';

export interface ToggleProps extends PropsWithChildren {
    checked: boolean;
    label?: string;
    labelPosition?: 'left' | 'right';
    color?: ColorDefinitions;
    onChange: (checked: boolean) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    validationErrorMessage?: string;
}

const Toggle = forwardRef(
    (
        {
            checked,
            label,
            labelPosition = 'right',
            color = ColorDefinitions.Default,
            onChange,
            children,
            onBlur,
            validationErrorMessage,
        }: ToggleProps,
        ref: React.Ref<any>
    ) => {
        const cls = ['switch', color ? `formcontrol-${color}` : ''].filter(Boolean).join(' ');

        return (
            <div className="form-field ">
                {labelPosition == 'left' ? <div className="mr-1">{label}</div> : null}

                <label className={cls}>
                    <span className="sr-only">{label}</span> {/* screen-reader only */}
                    <input
                        type="checkbox"
                        value="true"
                        onBlur={onBlur}
                        ref={ref}
                        aria-checked={checked ? 'true' : 'false'}
                        checked={checked}
                        onChange={(e) => onChange((e.target as HTMLInputElement).checked)}
                    />
                    <input type="hidden" value="false" />
                    <i></i>
                </label>

                {labelPosition == 'right' ? <div>{label}</div> : null}

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

export interface FormToggleProps extends Omit<ToggleProps, 'onChange' | 'checked' | 'ref' | 'onBlurs'> {
    rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormToggle: FC<FormToggleProps> = (props) => {
    const { control, rules, name, children, ...rest } = props;
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <Toggle
            {...rest}
            onChange={field.onChange}
            checked={field.value}
            onBlur={field.onBlur}
            ref={field.ref}
            validationErrorMessage={validationErr}
        >
            {children}
        </Toggle>
    );
};

export default Toggle;
