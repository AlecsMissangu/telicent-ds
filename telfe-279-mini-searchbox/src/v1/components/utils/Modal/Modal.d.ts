import { default as React } from '../../../../../node_modules/react';
import { ModalProps as MUIModalProps } from '@mui/material/Modal';

export type ModalProps = Omit<MUIModalProps, "slots" | "slotProps" | "BackdropComponent" | "BackdropProps" | "closeAfterTransition" | "components" | "componentsProps" | "container" | "disableAutoFocus" | "disableEnforceFocus" | "disableEscapeKeyDown" | "disableRestoreFocus" | "hideBackdrop" | "keepMounted" | "onBackdropClick" | "onTransitionEnter" | "onTransitionExit"> & {
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown" | "closeButtonClick") => void) | undefined;
};
export declare const Modal: React.FC<ModalProps>;
export default Modal;
