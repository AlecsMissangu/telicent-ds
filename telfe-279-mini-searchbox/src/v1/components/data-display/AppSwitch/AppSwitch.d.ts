import { default as React } from '../../../../../node_modules/react';
import { default as zod } from 'zod';

export declare const AppSwitchLibrarySchema: zod.ZodObject<{
    id: zod.ZodString;
    name: zod.ZodString;
    url: zod.ZodString;
    icon: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    id: string;
    url: string;
    name: string;
    icon: string;
}, {
    id: string;
    url: string;
    name: string;
    icon: string;
}>;
export type AppSwitchLibraryType = zod.infer<typeof AppSwitchLibrarySchema>[];
declare const AppSwitch: React.FC<{
    apps: AppSwitchLibraryType;
}>;
export default AppSwitch;
