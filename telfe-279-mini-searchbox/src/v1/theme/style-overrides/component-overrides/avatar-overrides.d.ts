import { ThemeOptions } from '@mui/material';

declare module "@mui/material/Avatar" {
    interface AvatarPropsVariantOverrides {
        "circular-outlined": true;
    }
}
declare const AVATAR_OVERRIDES: ThemeOptions["components"];
export default AVATAR_OVERRIDES;
