import { Meta, StoryObj } from '@storybook/react';
import { default as AppBar } from './AppBar';

declare const meta: Meta<typeof AppBar>;
export default meta;
type Story = StoryObj<typeof AppBar>;
export declare const Example: Story;
export declare const WithAppName: Story;
export declare const WithUserProfile: Story;
