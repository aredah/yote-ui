import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseCard from '.';


const meta = {
    title: 'Card/Base',
    component: BaseCard,
    parameters: {
        layout: 'centered',
        actions: {
            handles: ['mouseover', 'click .btn'],
        }
    },
    tags: ['autodocs'],
    argTypes: {}
}satisfies Meta<typeof BaseCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce euismod magna et sapien varius, ut ultrices lacus aliquet.',
        imageSrc: 'https://picsum.photos/200/300',
        actions:[
            {
                label: 'Action',
                onClick: action('Clicked Action')
            },
            {
                label: 'Link Action',
                href: 'https://www.google.com',
            }
        ]
    },
};