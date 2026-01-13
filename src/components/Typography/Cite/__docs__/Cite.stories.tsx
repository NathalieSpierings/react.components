import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Cite from '../Cite';

const meta: Meta<typeof Cite> = {
    title: 'Typography/Cite',
    component: Cite,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Cite>;

export const Default: Story = {
    args: {
        label: 'Firstname Lastname',
    },
};
