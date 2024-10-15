import { default as React } from '../../../../../node_modules/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type DownArrowIconProps = Omit<FontAwesomeIconProps, "icon">;
declare const DownArrow: React.FC<DownArrowIconProps>;
export default DownArrow;
