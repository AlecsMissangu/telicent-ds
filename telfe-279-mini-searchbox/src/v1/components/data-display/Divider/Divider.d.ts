export interface DividerProps {
    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    component?: React.ElementType;
    /**
     * If true, a vertical divider will have the correct height when used in flex
     * container. (By default, a vertical divider will have a calculated height of
     * 0px if it is the child of a flex container.)
     */
    flexItem?: boolean;
    /**
   * The component orientation.
   * @default 'horizontal'
   */
    orientation?: 'horizontal' | 'vertical';
}
declare const Divider: (props: DividerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Divider;
