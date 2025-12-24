import React, { useState } from 'react';
import { ColorDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import DismissButton from '../../UI/DismissButton/DismissButton';

export interface TagItem {
    id: string;
    title: string;
}

export interface TagsinputProps {
    tags: TagItem[];
    color?: ColorDefinitions;
    selectedTags: (items: TagItem[]) => void;
    label?: string;
    placeholder?: string;
}

const Tagsinput: React.FC<TagsinputProps> = ({
    tags,
    color,
    selectedTags,
    label,
    placeholder = 'Press enter to add tags',
}) => {
    const [tagItems, setTagItems] = useState<TagItem[]>(tags);

    const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const inputValue = event.currentTarget.value.trim();
        if (event.key === 'Enter' && inputValue !== '') {
            const newTag: TagItem = { id: inputValue, title: inputValue };
            const newTags = [...tagItems, newTag];
            setTagItems(newTags);
            selectedTags(newTags);
            event.currentTarget.value = '';
        }
    };

    const removeTags = (idToRemove: string) => {
        const newTags = tagItems.filter(tag => tag.id !== idToRemove);
        setTagItems(newTags);
        selectedTags(newTags);
    };

    return (
        <div className="form-group floating">
            <div className="tags-input">
                <ul id="tags" className="tags shown">
                    {tagItems.map(tag => (
                        <li key={tag.id} className={`tags__item bg-${color}`}>
                            <span className="tags__item__title">{tag.title}</span>
                            <DismissButton
                                size={SizeDefinitions.ExtraSmall}
                                circle={true}
                                right={true}
                                onClick={() => removeTags(tag.id)}
                            />
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    id="tagsInput"
                    onKeyUp={addTags}
                    placeholder={placeholder}
                />
                {label && <label htmlFor="tagsInput">{label}</label>}
            </div>
        </div>
    );
};

export default Tagsinput;