import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: (props: import('./Divider').DividerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
export type DividerStory = StoryObj<typeof meta>;
export declare const Example: DividerStory;
/**
 * Use the orientation prop to change the Divider from `horizontal` to `vertical`.
 */
export declare const Orientation: DividerStory;
/**
 * Use the `flexItem` prop to display the Divider when it's being used in a flex container.
 */
export declare const FlexItem: DividerStory;
