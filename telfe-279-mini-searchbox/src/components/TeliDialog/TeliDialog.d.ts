import { FC } from '../../../node_modules/react';
import { DialogActionsProps, DialogContentProps, DialogProps, DialogTitleProps } from '@mui/material';

/**
 * A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.
 * They can also be used to inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 * More information about how this component can be used can be found [here](https://mui.com/material-ui/react-dialog/#scrolling-long-content)
 */
declare const TeliDialog: FC<DialogProps>;
declare const TeliDialogContent: FC<DialogContentProps>;
declare const TeliDialogActions: FC<DialogActionsProps>;
declare const TeliDialogTitle: FC<DialogTitleProps>;
export { TeliDialog, TeliDialogContent, TeliDialogActions, TeliDialogTitle };
