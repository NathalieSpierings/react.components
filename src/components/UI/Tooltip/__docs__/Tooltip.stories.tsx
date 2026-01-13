import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { ColorDefinitions, IconDefinitions } from '../../../../lib/utils/definitions';
import { Icon } from '../../Icons/Icon';
import Tooltip from '../Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'UI kit/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        content: 'I am a tooltip',
        children: 'Hover me',
    },
};

export const RenderHtml: Story = {
    args: {
        renderHtml: true,
        content: '<strong>Warning!</strong> <p>I am a HTML tooltip</p>',
        children: 'Hover me',
    },
};

export const Directions: StoryFn = () => {
    return (
        <div className="row">
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="top-left">
                    Tooltip top left
                </Tooltip>{' '}
            </div>
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="top">
                    Tooltip top
                </Tooltip>{' '}
            </div>
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="top-right">
                    Tooltip top right
                </Tooltip>{' '}
            </div>
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="bottom-left">
                    Tooltip bottom left
                </Tooltip>{' '}
            </div>
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="bottom">
                    Tooltip bottom
                </Tooltip>{' '}
            </div>
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="bottom-right">
                    Tooltip bottom right
                </Tooltip>{' '}
            </div>
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="left">
                    Tooltip left
                </Tooltip>{' '}
            </div>
            <div className="col-3">
                {' '}
                <Tooltip content="I am a tooltip" direction="right">
                    Tooltip right
                </Tooltip>{' '}
            </div>
        </div>
    );
};

export const Color: StoryFn = () => {
    return (
        <div>
            <Tooltip content="I am a tooltip" background={ColorDefinitions.Magenta}>
                Tooltip top left
                <Icon icon={IconDefinitions.cookie} />
            </Tooltip>
            <SvgSprite />
        </div>
    );
};

export const OnMobileLeft: Story = {
    args: {
        content: 'I will flip to right on mobile or tablet',
        children: 'Hover me',
        direction: 'left',
        background: ColorDefinitions.Magenta,
    },
};

export const OnMobileRight: Story = {
    args: {
        content: 'I will flip to left on mobile or tablet',
        children: 'Hover me',
        direction: 'right',
        background: ColorDefinitions.Magenta,
    },
};

export const OverlfowTooltip: Story = {
    args: {
        content: 'Long text for instance in table cell',
        children: 'Table cell long text...',
        overflowTooltip: true,
    },
};
