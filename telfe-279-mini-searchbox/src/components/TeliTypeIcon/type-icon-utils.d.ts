export type TeliTypeIconSizeProp = "xs" | "sm" | "base" | "lg";
export declare const getSizeProps: (size: TeliTypeIconSizeProp) => {
    width: number;
    height: number;
} | {
    width: number;
    height: number;
    fontSize: number;
};
export declare const getDisabledStyles: (isDisabled: boolean) => {};
