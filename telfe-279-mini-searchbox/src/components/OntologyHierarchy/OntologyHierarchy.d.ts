import { default as React } from '../../../node_modules/react';
import { IconStyle } from '../../contexts/OntologyStyles';

export interface OntologyInputHierarchy {
    name: string;
    id: string;
    ontology: IconStyle;
    children?: OntologyInputHierarchy[];
}
export interface OntologyHierarchyProps {
    instanceId: string;
    data: OntologyInputHierarchy;
    descendantCount?: boolean;
    isDraggable?: boolean;
    dragEvent?: (event: React.DragEvent<HTMLElement>, nodeType: string) => void;
    isClickable?: boolean;
    clickEvent?: (nodeId: string) => void;
    baseKey?: string;
    filterIds?: string[];
    expandAll?: boolean;
    expandElement?: boolean;
}
declare const OntologyHierarchy: React.FC<OntologyHierarchyProps>;
export default OntologyHierarchy;
