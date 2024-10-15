import { IconStyle, StyleResponse } from './OntologyStyles';

export declare const getOntologyClass: (uri: string) => string;
export declare const getTypeInitials: (type: string) => string;
export declare const flattenStyles: (data: StyleResponse) => IconStyle[];
