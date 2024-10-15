import { UITheme } from '../../colors/theme-colors';

declare const generateButtonOverrides: (uiTheme: UITheme) => {
    MuiButton: {
        styleOverrides: {
            root: ({ theme }: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
            }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                component?: import('../../../../../node_modules/react').ElementType;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                    ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
                }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                    component?: import('../../../../../node_modules/react').ElementType;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                paddingInline: string;
            };
            outlinedInherit: ({ theme }: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
            }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                component?: import('../../../../../node_modules/react').ElementType;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                    ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
                }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                    component?: import('../../../../../node_modules/react').ElementType;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                border: string;
                boxShadow: string;
            };
            outlinedPrimary: ({ theme }: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
            }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                component?: import('../../../../../node_modules/react').ElementType;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                    ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
                }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                    component?: import('../../../../../node_modules/react').ElementType;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                border: string;
                backgroundColor: string;
                ":hover": {
                    backgroundColor: string;
                };
            };
            startIcon: {
                ">*:nth-last-of-type(1)": {
                    fontSize: string;
                };
            };
            endIcon: {
                ">*:nth-last-of-type(1)": {
                    fontSize: string;
                };
            };
        };
    };
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: number;
            };
        };
    };
};
export default generateButtonOverrides;
