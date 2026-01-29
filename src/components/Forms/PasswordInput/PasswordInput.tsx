import React, { FC, HTMLProps, ReactElement, forwardRef, useState } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import { DismissButton } from '../../UI/DismissButton';
import Icon from '../../UI/Icons/Icon/Icon';

export interface PasswordInputProps extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'ref'> {
    label?: string;
    placeholder?: string;
    inline?: boolean;
    size?: SizeDefinitions;
    color?: ColorDefinitions;
    type?: 'text' | 'password';
    variant?: 'default' | 'simple';
    iconDuotone?: boolean;
    validationErrorMessage?: string;
    onTextInput?: (val: string) => void;
    usePasswordCheck?: boolean;
    feedbackText?: string;
    feedbackMaxLenght?: string;
    feedbackUppercase?: string;
    feedbackNumber?: string;
    feedbackChar?: string;
}

const PasswordInput = forwardRef((props: PasswordInputProps, ref: React.Ref<any>): ReactElement => {
    const {
        value,
        label,
        inline,
        placeholder = '',
        type = 'password',
        size,
        color,
        variant = 'default',
        iconDuotone = false,
        validationErrorMessage,
        onTextInput,
        onInput,
        usePasswordCheck,
        feedbackText = 'Wachtwoord sterkte:',
        feedbackMaxLenght = 'Minstens 8 tekens',
        feedbackUppercase = 'Minstens 1 hoofdletter en 1 kleine letter',
        feedbackNumber = 'Minstens 1 cijfer',
        feedbackChar = 'Minstens 1 speciaal teken (!@#$%^&amp;*)',
        ...rest
    } = props;

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedbackCssClass, setFeedbackCssClass] = useState('');
    const [strength, setStrength] = useState(0);
    const [showHints, setShowHints] = useState(strength !== 4 && password.length !== 0);
    const [icon, setIcon] = useState(IconDefinitions.eye);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
        setIcon(showPassword ? IconDefinitions.eye : IconDefinitions.eye_off);
    };

    const calculateStrength = (pwd: string) => {
        let score = 0;
        const rules = [
            /([a-z].*[A-Z])|([A-Z].*[a-z])/, // uppercase & lowercase
            /[a-zA-Z]/.test(pwd) && /\d/.test(pwd), // number
            /[!%&@#$^*?_~]/, // special char
            pwd.length > 7, // length
        ];

        for (const rule of rules) {
            if (typeof rule === 'boolean' ? rule : (rule).test(pwd)) score++;
        }
        return score;
    };

    const updateFeedback = (score: number) => {
        if (score === 0) return ['', ''];
        if (score < 2) return ['Erg zwak', 'text-red'];
        if (score === 4) return ['Sterk', 'text-green'];
        return ['Zwak', 'text-orange'];
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!usePasswordCheck) return;
        const newPassword = e.currentTarget.value;
        setPassword(newPassword);
        const score = calculateStrength(newPassword);
        setStrength(score);
        const [fb, cls] = updateFeedback(score);
        setFeedback(fb);
        setFeedbackCssClass(cls);
        setShowHints(score !== 4 && newPassword.length > 0);
    };


    // helper to render password hint rows
    const renderHint = (condition: boolean, text: string) => (
        <div className={`password-check__hints--${text.toLowerCase().replaceAll(/\s/g, '-')}`}>
            <svg className={condition ? 'shown' : ''}>
                <use xlinkHref="#svg_icon_checkmark" />
            </svg>
            <span>{text}</span>
        </div>
    );

    const cls = [
        'form-group password prefix__inline prefix__inline--right',
        variant === 'default' ? '' : 'form-group__simple',
        color ? `formcontrol-${color}` : '',
        inline ? 'form-group__inline' : '',
        value ? 'floating' : '',
        validationErrorMessage ? 'form-group__invalid' : '',
    ]
        .filter(Boolean)
        .join(' ');

    const inputCls = [props.className, 'form-control', validationErrorMessage ? 'input-validation-error' : '']
        .filter(Boolean)
        .join(' ');

    return (
        <div className={cls}>
            <input
                className={inputCls}
                ref={ref}
                type={showPassword ? 'text' : 'password'}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
                {...rest}
                onKeyUp={handleKeyUp}
                onInput={(e) => {
                    onInput?.(e);
                    onTextInput?.((e.target as HTMLInputElement).value);
                }}
            />

            {validationErrorMessage ? (
                <span className="field-validation-error">
                    <span>{validationErrorMessage}</span>
                </span>
            ) : null}

            {label ? <label>{label}</label> : null}

            <div className={`${showPassword ? 'on' : ''}`}>
                <Icon icon={icon} onClick={toggleShowPassword} duotone={iconDuotone} />
            </div>

            {usePasswordCheck && (
                <div className="password-check">
                    <div className="password-check__indicator">
                        {['one', 'two', 'three', 'four'].map((key, idx) => (
                            <div key={key} className={idx < strength ? feedbackCssClass.replace('text-', 'bg-') : ''}></div>
                        ))}
                    </div>

                    <div className={`password-check__feedback ${password.length ? 'shown' : ''}`}>
                        <span>{feedbackText}&nbsp;</span>
                        <strong className={feedbackCssClass}>{feedback}</strong>
                    </div>

                    <div className={`password-check__hints ${showHints ? 'shown' : ''}`}>
                        <DismissButton
                            label="sluiten"
                            size={SizeDefinitions.Small}
                            circle={true}
                            onClick={() => setShowHints(!showHints)}
                        />
                        <div className="password-check__hints__container">
                            {renderHint(password.length > 7, feedbackMaxLenght)}
                            {renderHint(/([a-z].*[A-Z])|([A-Z].*[a-z])/.test(password), feedbackUppercase)}
                            {renderHint(/[a-zA-Z]/.test(password) && /\d/.test(password), feedbackNumber)}
                            {renderHint(/[!%&@#$^*?_~]/.test(password), feedbackChar)}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
});

export default PasswordInput;

export interface FormPasswordInputProps extends Omit<PasswordInputProps, 'onChange' | 'value' | 'onBlur' | 'name' | 'onInput'> {
    rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    control: Control<any, any>;
    name: string;
}

export const FormPasswordInput: FC<FormPasswordInputProps> = (props) => {
    const { name, control, rules, ...rest } = props;
    const { field, fieldState } = useController({
        name,
        control,
        rules,
    });

    const { invalid, isTouched, error } = fieldState;
    const validationErr = invalid ? error?.message! : '';

    return (
        <PasswordInput
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
