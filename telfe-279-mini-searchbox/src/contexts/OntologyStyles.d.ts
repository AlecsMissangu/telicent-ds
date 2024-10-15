import { OntologyService } from '@telicent-oss/ontologyservice';

type OntologyStyle = {
    defaultIcons: {
        riIcon: string;
        faIcon: string;
        faUnicode: string;
        faClass: string;
    };
    defaultStyles: {
        shape: string;
        borderRadius: string;
        borderWidth: string;
        selectedBorderWidth: string;
        dark: {
            backgroundColor: string;
            color: string;
        };
        light: {
            backgroundColor: string;
            color: string;
        };
    };
};
export type StyleResponse = Record<string, OntologyStyle>;
export type IconStyle = {
    classUri: string;
    backgroundColor: string;
    color: string;
    iconFallbackText: string;
    alt: string;
} & Partial<{
    faIcon: string;
    faUnicode: string;
    shape: string;
}>;
type OntologyStylesContextProps = {
    isLoadingStyles: boolean;
    styles: IconStyle[];
    findIcon: (classUri: string) => IconStyle;
};
type OntologyStylesProviderProps = {
    service: OntologyService;
} & Partial<{
    children: React.ReactNode;
}>;
declare const OntologyStylesProvider: React.FC<OntologyStylesProviderProps>;
declare const useOntologyStyles: () => OntologyStylesContextProps;
export { OntologyStylesProvider, useOntologyStyles };
