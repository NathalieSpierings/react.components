import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import ContentItem from '../ContentItem';
import { Icon } from '../../Icons/Icon';
import { IconDefinitions } from '../../../../lib/utils/definitions';
import Button from '../../../UI/Button/Button';
import React from 'react';


const meta: Meta<typeof ContentItem> = {
    title: 'Layout/Content item',
    component: ContentItem,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof ContentItem>;

export const Default: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};


export const WithMetaActions: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            metaActions: <>
                <Button>Action</Button>
                <Button>Action</Button>
            </>,
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};


export const TitleOnly: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            title: <div className="title">Title</div>
        }} />
    )
};


export const TitleAndSubtitleOnly: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            title: <div className="title">Title</div>,
            subtitle: <div className="subtitle">Subtitle</div>,
        }} />
    )
};


export const PrefixOnly: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};


export const PostfixOnly: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};

export const MetaActionsOnly: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',

            metaActions: <>
                <Button>Action</Button>
                <Button>Action</Button>
            </>
        }} />
    )
};



export const ContentPostionCenter: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            contentPositon: "center",
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};

export const ContentPostionEnd: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            contentPositon: "end",
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};


export const PrefixPostionStart: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            prefixPosition: "start",
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};

export const PrefixPostionEnd: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            prefixPosition: "end",
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};


export const PostfixPostionStart: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            postfixPosition: "start",
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};

export const PostfixPostionEnd: StoryFn = () => {
    return (
        <ContentItem item={{
            id: '1',
            prefix: <Icon icon={IconDefinitions.bin} />,
            title: <h4>Mijn titel</h4>,
            postfixPosition: "end",
            postfix: <Icon icon={IconDefinitions.bin} />,
        }} />
    )
};