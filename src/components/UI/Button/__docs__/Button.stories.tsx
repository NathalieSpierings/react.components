import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../../lib/utils/definitions';
import Icon from '../../Icons/Icon/Icon';
import Button from '../Button';
import React from 'react';

const meta: Meta<typeof Button> = {
    title: 'UI kit/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: StoryFn = () => {
    return (
        <div className="flex gap-1">
        <Button>Default</Button>
        <Button><Icon icon={IconDefinitions.arrow_left} position="left" />Default</Button>
      </div>

    )
};

export const Surfaces: StoryFn = () => {
    return (
       <div className="flex gap-1">       
        <Button color={ColorDefinitions.SurfaceDark}>Surface dark</Button>
        <Button color={ColorDefinitions.SurfaceDark}><Icon icon={IconDefinitions.arrow_left} position="left" />Surface dark</Button>
        <Button color={ColorDefinitions.Surface}>Surface</Button>
        <Button color={ColorDefinitions.Surface}><Icon icon={IconDefinitions.arrow_left} position="left" />Surface</Button>
        <Button color={ColorDefinitions.SurfaceLight}><Icon icon={IconDefinitions.arrow_left} position="left" />Surface light</Button>
        <Button color={ColorDefinitions.SurfaceLight}>Surface light</Button>
      </div>
    );
};

export const Variants: StoryFn = () => {
    return (
        <>
            <SvgSprite />
            <div className="flex gap-1">
        <Button color={ColorDefinitions.Olive}>Button bg</Button>
        <Button color={ColorDefinitions.Blue} raised={true}>Raised</Button>
        <Button color={ColorDefinitions.Pink} shadow={true}>Shadow</Button>

        <Button color={ColorDefinitions.Rose}><Icon icon={IconDefinitions.arrow_left} position="left" />Icon left</Button>
        <Button color={ColorDefinitions.Rose}>Icon right<Icon icon={IconDefinitions.arrow_right} position="right" /></Button>

        <Button color={ColorDefinitions.Olive} rounded={true}>Rounded</Button>
        <Button circle={true} color={ColorDefinitions.Olive}> <Icon icon={IconDefinitions.bulb} /></Button>

        <Button color={ColorDefinitions.Blue} variant="outline">Outline</Button>
        <Button color={ColorDefinitions.Pink} variant="outline" rounded={true}>Outline rounded</Button>
        <Button color={ColorDefinitions.Rose} variant="outline" circle={true}> <Icon icon={IconDefinitions.bulb} /></Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="flat" color={ColorDefinitions.Primary} rippleColor={ColorDefinitions.Primary}>Flat</Button>
      </div>
        </>
    );
};

export const Sizes: StoryFn = () => {
    return (
        <>
            <SvgSprite />
           <div className="flex gap-1">
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraSmall}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Small}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Medium}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Large}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge2}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge3}>Button</Button>
      </div>

      <div className="flex gap-1">
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraSmall}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Small}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Medium}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Large}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge2}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge3}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
      </div>
        </>
    );
};

export const Fluid: Story = {
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        fluid: true,
        children: 'Button',
        onClick: () => console.log('Button'),
    },
};
