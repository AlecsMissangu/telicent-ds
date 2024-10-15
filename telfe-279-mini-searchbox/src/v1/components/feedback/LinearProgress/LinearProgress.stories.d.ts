import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('@mui/material').LinearProgressProps>;
};
export default meta;
export type LinearProgressStory = StoryObj<typeof meta>;
export declare const Basic: LinearProgressStory;
