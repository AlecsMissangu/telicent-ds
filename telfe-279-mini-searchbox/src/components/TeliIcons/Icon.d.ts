import { default as React } from '../../../node_modules/react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export type TeliIconProps = React.HTMLAttributes<SVGElement> & {
    /**
     * Can be used to control the size of the icon
     */
    size: SizeProp;
};
interface IconProps extends Partial<TeliIconProps> {
    faIcon: IconProp;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
