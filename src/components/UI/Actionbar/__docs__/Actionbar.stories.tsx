import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';


import Actionbar from '../Actionbar';
import React from 'react';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { Button } from '../../Button';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../../lib/utils/definitions';
import { Icon } from '../../Icons/Icon';
import { Badge } from '../../Badge';

const meta: Meta<typeof Actionbar> = {
    title: 'UI Kit/Toolbars/Actionbar',
    component: Actionbar,
    parameters: {
        layout: 'centered',
    },

};

export default meta;
type Story = StoryObj<typeof Actionbar>;

export const Default: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <SvgSprite />
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    title: 'Actionbar title',
                    metaActions: (
                        <>
                            <Button>Cancel</Button>
                            <Button color={ColorDefinitions.Primary}>Save</Button>
                        </>
                    ),
                    postfix: (
                        <>
                            <Icon icon={IconDefinitions.search} variant="circle" />
                            <Icon icon={IconDefinitions.vertical_spacing} variant="circle" />
                        </>
                    ),
                }}
            />
        </div>
    );
};

export const WithTitleContent: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    content: (
                        <div className="flex flex-center">
                            <h3>Actionbar title </h3>
                            <Badge size={SizeDefinitions.ExtraSmall} background={ColorDefinitions.Red}>
                                HOT
                            </Badge>
                        </div>
                    ),
                }}
            />
        </div>
    );
};

export const CustomContent: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <Actionbar
                contentItem={{
                    id: '1',
                    content: (
                        <>
                            <h4>Actionbar customtitle</h4>
                            <h6>Actionbar custom subtitle</h6>
                        </>
                    ),
                }}
            />
        </div>
    );
};

export const NoTitle: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <SvgSprite />
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    metaActions: (
                        <>
                            <Button>Cancel</Button>
                            <Button color={ColorDefinitions.Primary}>Save</Button>
                        </>
                    ),
                    postfix: (
                        <>
                            <Icon icon={IconDefinitions.search} variant="circle" />
                            <Icon icon={IconDefinitions.vertical_spacing} variant="circle" />
                        </>
                    ),
                }}
            />
        </div>
    );
};

export const NoActions: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    content: (
                        <div className="flex flex-center">
                            <h3>Actionbar title </h3>
                            <Badge size={SizeDefinitions.ExtraSmall} background={ColorDefinitions.Red}>
                                HOT
                            </Badge>
                        </div>
                    ),
                    postfix: (
                        <>
                            <Button>Cancel</Button>
                            <Button color={ColorDefinitions.Primary}>Save</Button>
                        </>
                    ),
                }}
            />
        </div>
    );
};

export const NoButtons: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <SvgSprite />
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    content: (
                        <>
                            <span>Actionbar title</span>
                            <Badge size={SizeDefinitions.ExtraSmall} color={ColorDefinitions.Primary}>
                                HOT
                            </Badge>
                        </>
                    ),
                    postfix: (
                        <>
                            <Icon icon={IconDefinitions.search} variant="circle" />
                            <Icon icon={IconDefinitions.vertical_spacing} variant="circle" />
                        </>
                    ),
                }}
            />
        </div>
    );
};

export const OnlyTitle: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    title: 'Actionbar title',
                }}
            />
        </div>
    );
};

export const OnlyButtons: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    postfix: (
                        <>
                            <Button>Cancel</Button>
                            <Button color={ColorDefinitions.Primary}>Save</Button>
                        </>
                    ),
                }}
            />
        </div>
    );
};

export const OnlyActions: StoryFn = () => {
    return (
        <div style={{ width: '40vw' }}>
            <SvgSprite />
            <Actionbar
                actionbarCss="mb-5"
                contentItem={{
                    id: '1',
                    postfix: (
                        <>
                            <Icon icon={IconDefinitions.search} variant="circle" />
                            <Icon icon={IconDefinitions.vertical_spacing} variant="circle" />
                        </>
                    ),
                }}
            />
        </div>
    );
};
