export interface StandardLayoutProps {
    /**
     * The telicent application name
     */
    appName: string;
    /**
     * Has the application moved into its second phase of testing and is ready for external use by customers or clients?
     * @default false
     */
    beta?: boolean;
}
