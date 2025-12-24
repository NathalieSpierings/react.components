import React, { FC } from 'react';
import { Input, InputProps } from '../Input/Input';
import { IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../../UI/Icons/Icon/Icon';

export interface SearchInputProps extends InputProps {
    placeholder?: string;
    onTextInput?: (val: string) => void;
    iconDuotone?: boolean;
}

const SearchInput: FC<SearchInputProps> = ({ placeholder = 'Zoeken...', onTextInput, iconDuotone = false, ...rest }) => {
    return (
        <div className="search-input">
            <Input inline={true} placeholder={placeholder} onTextInput={onTextInput} {...rest} />

            <Icon icon={IconDefinitions.search} size={SizeDefinitions.Small} duotone={iconDuotone} />
        </div>
    );
};

export default SearchInput;
