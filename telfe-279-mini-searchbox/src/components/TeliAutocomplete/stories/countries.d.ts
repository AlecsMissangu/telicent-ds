declare const COUNTRIES: ({
    code: string;
    label: string;
    phone: string;
    suggested?: undefined;
} | {
    code: string;
    label: string;
    phone: string;
    suggested: boolean;
})[];
export default COUNTRIES;
