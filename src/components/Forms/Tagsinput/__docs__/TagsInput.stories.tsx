import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import TagsInput, { TagItem } from '../TagsInput';
import React from 'react';

const meta: Meta<typeof TagsInput> = {
    title: 'Forms/TagsInput',
    component: TagsInput,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '50vw' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof TagsInput>;

const tagItems: TagItem[] = [{
    id: '1',
    title: 'New York'
},
{
    id: '2',
    title: 'Paris'
}]

export const Default: StoryFn = () => {
    const selectedTags = (tags: any) => {
        console.log(tags);
    };

    return (
        <TagsInput
            selectedTags={selectedTags}
            tags={tagItems}
            label="My tags"
            placeholder="Enter om tags toe te voegen"
        />
    );
};

export const SelectedTags: StoryFn = () => {
    const selectedTags = (tags: any) => {
        console.log(tags);
    };

    return <TagsInput selectedTags={selectedTags} tags={tagItems} label="My tags" />;
};

export const Colored: StoryFn = () => {
    const selectedTags = (tags: any) => { };

    return (
        <TagsInput
            selectedTags={selectedTags}
            color={ColorDefinitions.Green}
            tags={tagItems}
            label="My tags"
        />
    );
};
