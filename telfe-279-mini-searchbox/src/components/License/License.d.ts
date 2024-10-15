import { default as React, ReactNode } from '../../../node_modules/react';

interface LicenseProps {
    /**
     * Telicent application name
     */
    appName: string;
    /**
     * Telicent application version (should be the same as the one found in package.json)
     */
    appVersion: string;
    /**
     * License expiration date
     */
    expiryDate?: Date | string;
    /**
     * License copyright text
     */
    licenseCopy: ReactNode;
    /**
     * Handler for when acknowledge button is pressed
     */
    onAcknowledge?: () => void;
}
declare const License: React.FC<LicenseProps>;
export default License;
