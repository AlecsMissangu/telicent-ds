import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./UserProfile').UserProfileProps>;
    tags: string[];
    argTypes: {
        fullName: {
            description: string;
        };
        children: {
            control: false;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
export type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
