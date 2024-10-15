import { default as React } from '../../../node_modules/react';

type NavProps = JSX.IntrinsicElements["nav"];
export interface TeliHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
    children?: React.ReactNode;
    /**
     * Attributes to add to the nav component
     */
    navProps?: NavProps;
}
declare const TeliHeader: React.FC<TeliHeaderProps>;
export default TeliHeader;
