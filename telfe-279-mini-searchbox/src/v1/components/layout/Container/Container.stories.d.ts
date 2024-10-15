import { StoryObj } from '@storybook/react';
import { default as Container } from './Container';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./Container').ContainerProps>;
    tags: string[];
};
export default meta;
export type ContainerStory = StoryObj<typeof meta>;
export declare const Basic: StoryObj<typeof Container>;
