import { default as React } from '../../../node_modules/react';
import { TeliUserAvatarProps } from '../TeliAvatar/TeliUserAvatar';

interface TeliUserProfileButtonProps extends Partial<TeliUserAvatarProps> {
    /**
     * Is the menu component opened?
     */
    open: boolean;
    /**
     * Callback function fired when the button is clicked
     * @returns void
     */
    onClick: (event: React.SyntheticEvent) => void;
}
declare const TeliUserProfileButton: React.FC<TeliUserProfileButtonProps>;
export default TeliUserProfileButton;
