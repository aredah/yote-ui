import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Actions from '.';

const meta = {
    title: 'Actions',
    component: Actions,
    parameters: {
        layout: 'centered',
        actions: {
            handles: ['mouseover', 'click .btn'],
        },
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Actions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        actions: [
            {
                label: 'Action',
                onClick: action('Clicked Action'),
            },
            {
                label: 'Link Action',
                href: 'https://www.google.com',
            },
        ],
    },
};