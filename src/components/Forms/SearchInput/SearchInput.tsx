import React, { FC } from 'react';
import { Input, InputProps } from '../Input/Input';
import { IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../../UI/Icons/Icon/Icon';

export interface SearchInputProps extends InputProps {
    placeholder?: string;
    onTextInput?: (val: string) => void;
    size?: "sm" | "md" | "lg" | "xl";
}

const SearchInput: FC<SearchInputProps> = ({ size, placeholder = 'Zoeken...', onTextInput, ...rest }) => {
    return (
        <div className={`search-input ${size ? 'search-input--' + size : ''}`}>
            <Input inline={true} placeholder={placeholder} onTextInput={onTextInput} {...rest} />
            <Icon icon={IconDefinitions.search} />
        </div>
    );
};

export default SearchInput;
