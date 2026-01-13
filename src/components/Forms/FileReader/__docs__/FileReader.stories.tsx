import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import FileSelect from '../../../Forms/FileSelect/FileSelect';
import FileReader from '../FileReader';
import React from 'react';

const meta: Meta<typeof FileReader> = {
    title: 'Forms/FileReader',
    component: FileReader,
    parameters: {
        layout: 'fullscreen',
    }
};

export default meta;
type Story = StoryObj<typeof FileReader>;

export const Default: StoryFn = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    return (
        <>
            <SvgSprite />
            <FileSelect
                multiple={false}
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                collectionCss="mb-5"
                collectionItemBorder="bordered"
                collectionBorderColor={ColorDefinitions.Surface}
                accept={['.csv']}
            />
        </>
    );
};
