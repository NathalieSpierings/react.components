import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DescriptionList from '../DescriptionList';

const meta: Meta<typeof DescriptionList> = {
    title: 'Typography/DescriptionList',
    component: DescriptionList,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

const items = [
    {
        label: 'United Nations Development Programme',
        text: 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.',
    },
    {
        label: 'United Nations Development Programme',
        text: 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.',
    },
    {
        label: 'United Nations Development Programme',
        text: 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.',
    },
];

export const Default: Story = {
    args: {
        data: items,
    },
};
