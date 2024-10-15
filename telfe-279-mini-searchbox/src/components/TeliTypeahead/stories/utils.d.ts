export type Target = {
    targetUri: string;
    displayName: string;
    primaryType: string;
};
export declare const transformData: (targets: Target[]) => {
    value: string;
    label: string;
    type: string;
}[];
