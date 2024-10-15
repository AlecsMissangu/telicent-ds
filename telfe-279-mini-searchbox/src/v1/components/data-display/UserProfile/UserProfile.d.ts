import { default as React, PropsWithChildren } from '../../../../../node_modules/react';

export type UserProfileProps = PropsWithChildren & {
    fullName: string;
};
declare const UserProfile: React.FC<UserProfileProps>;
export default UserProfile;
