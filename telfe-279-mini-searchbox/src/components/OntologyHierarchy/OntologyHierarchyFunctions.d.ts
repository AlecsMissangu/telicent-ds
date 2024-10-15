import { IconStyle } from '../../contexts/OntologyStyles';
import * as d3 from "d3";
export interface HierarchyBase {
    name: string;
    id?: string;
    ontology?: Required<IconStyle>;
    yPos?: number;
    startLeft?: number;
    hOrderPosition?: number;
    descendantCount?: number;
    expandLabel?: string;
    labelWidth?: number;
    highlight?: boolean;
    _children?: d3.HierarchyNode<HierarchyBase>[];
    children?: d3.HierarchyNode<HierarchyBase>[] | HierarchyBase[];
}
export declare const prepareTreeData: (chartData: d3.HierarchyNode<HierarchyBase>, margin: {
    [key: string]: number;
}, depthTab: number, rowHeight: number, descendantCount: boolean) => d3.HierarchyNode<HierarchyBase>[];
export declare const addHierarchy: (data: HierarchyBase, startingDepth: number, baseKey: string, filterIds: string[], expandAll: boolean, expandElement: boolean) => d3.HierarchyNode<HierarchyBase>;
export declare const checkOntology: (iconType: string, findIcon: (classUri: string) => IconStyle) => Required<IconStyle>;
