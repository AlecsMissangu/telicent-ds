import { default as React } from '../../../node_modules/react';
import { TeliUserAvatarProps } from '../TeliAvatar/TeliUserAvatar';
import { TeliUserProfileMenuProps } from './TeliUserProfileMenu';

export interface TeliUserProfileProps extends Partial<TeliUserAvatarProps> {
    onSettingsClick: TeliUserProfileMenuProps["onSettingsClick"];
}
declare const TeliUserProfile: React.FC<Partial<TeliUserProfileProps>>;
export default TeliUserProfile;
