import { z } from 'zod';

export declare const modalPropsSchema: z.ZodObject<Omit<{
    open: z.ZodBoolean;
    children: z.ZodObject<{
        type: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, z.ZodSymbol]>;
        props: z.ZodRecord<z.ZodString, z.ZodAny>;
        key: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>>;
    }, "strip", z.ZodTypeAny, {
        type: string | symbol | ((...args: unknown[]) => unknown);
        props: Record<string, any>;
        key?: string | number | null | undefined;
    }, {
        type: string | symbol | ((...args: unknown[]) => unknown);
        props: Record<string, any>;
        key?: string | number | null | undefined;
    }>;
    className: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    closeAfterTransition: z.ZodOptional<z.ZodBoolean>;
    components: z.ZodOptional<z.ZodAny>;
    componentsProps: z.ZodOptional<z.ZodAny>;
    container: z.ZodOptional<z.ZodAny>;
    disableAutoFocus: z.ZodOptional<z.ZodBoolean>;
    disableEnforceFocus: z.ZodOptional<z.ZodBoolean>;
    disableEscapeKeyDown: z.ZodOptional<z.ZodBoolean>;
    disablePortal: z.ZodOptional<z.ZodBoolean>;
    disableRestoreFocus: z.ZodOptional<z.ZodBoolean>;
    disableScrollLock: z.ZodOptional<z.ZodBoolean>;
    hideBackdrop: z.ZodOptional<z.ZodBoolean>;
    keepMounted: z.ZodOptional<z.ZodBoolean>;
    manager: z.ZodOptional<z.ZodAny>;
    onBackdropClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onClose: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onTransitionEnter: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onTransitionExit: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    sx: z.ZodOptional<z.ZodAny>;
    BackdropComponent: z.ZodOptional<z.ZodAny>;
    BackdropProps: z.ZodOptional<z.ZodAny>;
    slots: z.ZodOptional<z.ZodAny>;
    slotProps: z.ZodOptional<z.ZodAny>;
}, "BackdropComponent" | "BackdropProps" | "closeAfterTransition" | "components" | "componentsProps" | "container" | "disableAutoFocus" | "disableEnforceFocus" | "disableEscapeKeyDown" | "disableRestoreFocus" | "hideBackdrop" | "keepMounted" | "onBackdropClick" | "onTransitionEnter" | "slots" | "slotProps" | "onTransitionExit">, "passthrough", z.ZodTypeAny, z.objectOutputType<Omit<{
    open: z.ZodBoolean;
    children: z.ZodObject<{
        type: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, z.ZodSymbol]>;
        props: z.ZodRecord<z.ZodString, z.ZodAny>;
        key: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>>;
    }, "strip", z.ZodTypeAny, {
        type: string | symbol | ((...args: unknown[]) => unknown);
        props: Record<string, any>;
        key?: string | number | null | undefined;
    }, {
        type: string | symbol | ((...args: unknown[]) => unknown);
        props: Record<string, any>;
        key?: string | number | null | undefined;
    }>;
    className: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    closeAfterTransition: z.ZodOptional<z.ZodBoolean>;
    components: z.ZodOptional<z.ZodAny>;
    componentsProps: z.ZodOptional<z.ZodAny>;
    container: z.ZodOptional<z.ZodAny>;
    disableAutoFocus: z.ZodOptional<z.ZodBoolean>;
    disableEnforceFocus: z.ZodOptional<z.ZodBoolean>;
    disableEscapeKeyDown: z.ZodOptional<z.ZodBoolean>;
    disablePortal: z.ZodOptional<z.ZodBoolean>;
    disableRestoreFocus: z.ZodOptional<z.ZodBoolean>;
    disableScrollLock: z.ZodOptional<z.ZodBoolean>;
    hideBackdrop: z.ZodOptional<z.ZodBoolean>;
    keepMounted: z.ZodOptional<z.ZodBoolean>;
    manager: z.ZodOptional<z.ZodAny>;
    onBackdropClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onClose: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onTransitionEnter: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onTransitionExit: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    sx: z.ZodOptional<z.ZodAny>;
    BackdropComponent: z.ZodOptional<z.ZodAny>;
    BackdropProps: z.ZodOptional<z.ZodAny>;
    slots: z.ZodOptional<z.ZodAny>;
    slotProps: z.ZodOptional<z.ZodAny>;
}, "BackdropComponent" | "BackdropProps" | "closeAfterTransition" | "components" | "componentsProps" | "container" | "disableAutoFocus" | "disableEnforceFocus" | "disableEscapeKeyDown" | "disableRestoreFocus" | "hideBackdrop" | "keepMounted" | "onBackdropClick" | "onTransitionEnter" | "slots" | "slotProps" | "onTransitionExit">, z.ZodTypeAny, "passthrough">, z.objectInputType<Omit<{
    open: z.ZodBoolean;
    children: z.ZodObject<{
        type: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, z.ZodSymbol]>;
        props: z.ZodRecord<z.ZodString, z.ZodAny>;
        key: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>>;
    }, "strip", z.ZodTypeAny, {
        type: string | symbol | ((...args: unknown[]) => unknown);
        props: Record<string, any>;
        key?: string | number | null | undefined;
    }, {
        type: string | symbol | ((...args: unknown[]) => unknown);
        props: Record<string, any>;
        key?: string | number | null | undefined;
    }>;
    className: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    closeAfterTransition: z.ZodOptional<z.ZodBoolean>;
    components: z.ZodOptional<z.ZodAny>;
    componentsProps: z.ZodOptional<z.ZodAny>;
    container: z.ZodOptional<z.ZodAny>;
    disableAutoFocus: z.ZodOptional<z.ZodBoolean>;
    disableEnforceFocus: z.ZodOptional<z.ZodBoolean>;
    disableEscapeKeyDown: z.ZodOptional<z.ZodBoolean>;
    disablePortal: z.ZodOptional<z.ZodBoolean>;
    disableRestoreFocus: z.ZodOptional<z.ZodBoolean>;
    disableScrollLock: z.ZodOptional<z.ZodBoolean>;
    hideBackdrop: z.ZodOptional<z.ZodBoolean>;
    keepMounted: z.ZodOptional<z.ZodBoolean>;
    manager: z.ZodOptional<z.ZodAny>;
    onBackdropClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onClose: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onTransitionEnter: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    onTransitionExit: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    sx: z.ZodOptional<z.ZodAny>;
    BackdropComponent: z.ZodOptional<z.ZodAny>;
    BackdropProps: z.ZodOptional<z.ZodAny>;
    slots: z.ZodOptional<z.ZodAny>;
    slotProps: z.ZodOptional<z.ZodAny>;
}, "BackdropComponent" | "BackdropProps" | "closeAfterTransition" | "components" | "componentsProps" | "container" | "disableAutoFocus" | "disableEnforceFocus" | "disableEscapeKeyDown" | "disableRestoreFocus" | "hideBackdrop" | "keepMounted" | "onBackdropClick" | "onTransitionEnter" | "slots" | "slotProps" | "onTransitionExit">, z.ZodTypeAny, "passthrough">>;
