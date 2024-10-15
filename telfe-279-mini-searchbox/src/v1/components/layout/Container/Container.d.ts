import { default as React, PropsWithChildren } from '../../../../../node_modules/react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    /** If true, the left and right padding is removed. */
    disablePadding?: boolean;
    /** Set the maxWidth to match the minWidth of the current breakpoint. Useful
     * when the design is set for fixed sizes instead of trying to accommodate a
     * fluid viewport. It's fluid by default */
    fixed?: boolean;
    /** Sets the maxWidth of the container. The container will grow with the size
     * of the screen. Set to false to disable maxWidth */
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}
declare const Container: React.FC<ContainerProps>;
export default Container;
