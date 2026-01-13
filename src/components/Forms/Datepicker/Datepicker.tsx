import React, { FC, forwardRef } from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { Input } from '../Input/Input';

export type OurDatepickerProps = Omit<
    DatePickerProps,
    | 'className'
    | 'locale'
    | 'onChange'
    | 'selectsRange'
    | 'selectsMultiple'
    | 'showMonthYearDropdown'
    | 'validationErrorMessage'
> & {
    validationErrorMessage?: string;
} & (
        | {
              selectsRange?: never;
              selectsMultiple?: never;
              onChange: (
                  date: Date | null,
                  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
              ) => void;
          }
        | {
              selectsRange: true;
              selectsMultiple?: never;
              onChange: (
                  date: [Date | null, Date | null],
                  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
              ) => void;
          }
        | {
              selectsRange?: never;
              selectsMultiple: true;
              onChange: (
                  date: Date[] | null,
                  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
              ) => void;
          }
    );

const Datepicker = forwardRef<DatePicker, OurDatepickerProps>((props, ref) => {
    const { customInput, validationErrorMessage, ...restProps } = props;

    const updatedProps = {
        ...restProps,
        showWeekNumbers: props.showWeekNumbers !== undefined ? props.showWeekNumbers : true,
        todayButton: props.todayButton ?? 'Vandaag',
        customInput: React.isValidElement(customInput) ? (
            React.cloneElement(customInput as React.ReactElement<any>, {
                validationErrorMessage,
            })
        ) : (
            <Input validationErrorMessage={validationErrorMessage} />
        ),
    };

    return <DatePicker className="form-control" locale="nl" dateFormat="dd-MM-yyyy" ref={ref} {...updatedProps} />;
});

//Als je een component maakt met forwardRef, krijgt het standaard een generieke naam .
//Door displayName toe te voegen, ziet het er in React DevTools zo uit: <Datepicker />
Datepicker.displayName = 'Datepicker';

export interface FormDatepickerProps
    extends Omit<
        OurDatepickerProps,
        'onChange' | 'selectsRange' | 'selectsMultiple' | 'onChange' | 'value' | 'onBlur' | 'name'
    > {
    rules?:
        | Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
        | undefined;
    control: Control<any, any>;
    name: string;
}

export const FormDatepicker: FC<FormDatepickerProps> = (props) => {
    const { name, control, rules, ...rest } = props;

    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
       <Datepicker
                {...rest}
                ref={field.ref}
                onChange={field.onChange}
                onBlur={field.onBlur}
                selected={field.value}
                name={field.name}
                validationErrorMessage={validationErr ? validationErr : undefined}
            />
    );
};

export default Datepicker;
