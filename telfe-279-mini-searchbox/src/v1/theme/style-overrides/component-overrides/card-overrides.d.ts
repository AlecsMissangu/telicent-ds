import { UITheme } from '../../colors/theme-colors';

declare const generateCardOverrides: (uiTheme: UITheme) => {
    MuiCard: {
        variants: {
            props: {
                variant: "outlined";
            };
            style: {
                borderWidth: number;
                borderStyle: "solid";
                borderColor: string;
            };
        }[];
        styleOverrides: {
            root: ({ theme }: import('@mui/material').CardOwnProps & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
                ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
            }, "children" | "className" | "style" | "square" | "elevation" | "classes" | "sx" | "variant" | "raised"> & {
                component?: import('../../../../../node_modules/react').ElementType;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').CardOwnProps & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
                    ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
                }, "children" | "className" | "style" | "square" | "elevation" | "classes" | "sx" | "variant" | "raised"> & {
                    component?: import('../../../../../node_modules/react').ElementType;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                borderRadius: string;
            };
        };
    };
    MuiCardContent: {
        styleOverrides: {
            root: ({ theme }: import('@mui/material').CardContentOwnProps & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
                ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
            }, "children" | "className" | "style" | "classes" | "sx"> & {
                component?: import('../../../../../node_modules/react').ElementType;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').CardContentOwnProps & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
                    ref?: ((instance: HTMLDivElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
                }, "children" | "className" | "style" | "classes" | "sx"> & {
                    component?: import('../../../../../node_modules/react').ElementType;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                padding: string;
                ":last-child": {
                    padding: string;
                };
            };
        };
    };
    MuiCardActions: {
        styleOverrides: {
            root: {
                padding: number;
                flexDirection: "row-reverse";
                width: string;
            };
        };
    };
};
export default generateCardOverrides;
