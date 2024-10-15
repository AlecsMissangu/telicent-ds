import { default as React, FC } from '../../../node_modules/react';
import { ListItemButtonProps, ListItemProps, ListProps } from '@mui/material';

export type TeliListProps = React.HTMLAttributes<HTMLUListElement> & Partial<{
    dense: ListProps["dense"];
    disablePadding: ListProps["disablePadding"];
    subheader: ListProps["subheader"];
}>;
declare const TeliList: FC<TeliListProps>;
type TeliListItemButtonProps = React.HTMLAttributes<HTMLButtonElement> & Partial<{
    alignItems: ListItemButtonProps["alignItems"];
    autoFocus: ListItemButtonProps["autoFocus"];
    dense: ListItemButtonProps["dense"];
    disabled: ListItemButtonProps["disabled"];
    disableGutters: ListItemButtonProps["disableGutters"];
    divider: ListItemButtonProps["divider"];
    selected: ListItemButtonProps["selected"];
}>;
declare const TeliListItemButton: FC<TeliListItemButtonProps>;
type TeliListItemProps = React.HTMLAttributes<HTMLLIElement> & Partial<{
    alignItems: ListItemProps["alignItems"];
    children: ListItemProps["children"];
    dense: ListItemProps["dense"];
    disableGutters: ListItemProps["disableGutters"];
    disablePadding: ListItemProps["disablePadding"];
    divider: ListItemProps["divider"];
    secondaryAction: ListItemProps["secondaryAction"];
}>;
declare const TeliListItem: FC<TeliListItemProps>;
export { TeliList, TeliListItemButton, TeliListItem };
