import { default as React } from '../../../node_modules/react';
import { StandardLayoutProps } from '../../types/layout';

export interface TeliBrandProps extends StandardLayoutProps, React.HTMLAttributes<HTMLAnchorElement> {
    /**
     * How big should the brand component be?
     * @default base
     */
    size?: "base" | "jumbo";
    /**
     * URL
     */
    href?: string;
    /**
     * Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).
     */
    target?: string;
    /**
     * The relationship of the linked URL as space-separated link types
     */
    rel?: string;
}
/**
 * Note: The application color is taken from index.css
 */
declare const TeliBrand: React.FC<TeliBrandProps>;
export default TeliBrand;
