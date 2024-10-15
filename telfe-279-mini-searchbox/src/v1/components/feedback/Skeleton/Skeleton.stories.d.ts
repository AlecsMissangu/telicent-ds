import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('@mui/material/OverridableComponent').OverridableComponent<import('@mui/material').SkeletonTypeMap<{}, "span">>;
};
export default meta;
export type SkeletonStory = StoryObj<typeof meta>;
export declare const Basic: SkeletonStory;
