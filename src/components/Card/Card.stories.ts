import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ThingCard from '.';


const meta = {
    title: 'Card/Thing',
    component: ThingCard,
    parameters: {
        layout: 'centered',
        actions: {
            handles: ['mouseover', 'click .btn'],
        }
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof ThingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'Card Title',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce euismod magna et sapien varius, ut ultrices lacus aliquet.',
        image: {
            contentUrl: 'https://picsum.photos/300/300'
        },
        actions: [
            {
                label: 'Action 1',
                onClick: action('Clicked Action')
            }
        ]
    },
};

export const NoImage: Story = {
    args: {
        name: 'Card Title',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce euismod magna et sapien varius, ut ultrices lacus aliquet.',
        actions: [
            {
                label: 'Action 1',
                onClick: action('Clicked Action')
            }
        ]
    },
};