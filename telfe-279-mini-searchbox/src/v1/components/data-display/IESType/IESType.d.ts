import { default as React } from '../../../../../node_modules/react';

export interface IESTypeProps extends React.HTMLAttributes<HTMLElement> {
    backgroundColor: string;
    borderColor: string;
    color: string;
    iconClass: string;
}
declare const IESType: React.FC<IESTypeProps>;
export default IESType;
