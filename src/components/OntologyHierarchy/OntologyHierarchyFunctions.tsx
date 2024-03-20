import * as d3 from "d3";
import { IconStyle } from "../../contexts/OntologyStyles";
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
  highlight?:boolean;
  _children?: d3.HierarchyNode<HierarchyBase>[];
  children?: d3.HierarchyNode<HierarchyBase>[] | HierarchyBase[];
}



const measureWidth = (measureText: string , measureFontSize: number) => {
  const tempSvg = d3.select("body").append("svg");
  const tempText = tempSvg.append("text")
      .attr("font-size", measureFontSize)
      .text(measureText);
  const tryTextWidth = tempText.node()?.getComputedTextLength();
  const textWidth: number = tryTextWidth ?? 0;
  tempSvg.remove();
  return textWidth
};
export const prepareTreeData = (chartData:  d3.HierarchyNode<HierarchyBase>, margin: {[key: string]: number}, depthTab:  number, rowHeight: number, descendantCount: boolean) => {

  let treeData = chartData.descendants().filter((f) => f.depth > 0);
  treeData = treeData.sort((a, b) => d3.ascending(a.data.hOrderPosition, b.data.hOrderPosition))

  treeData.forEach((d, i: number) => {
    d.data.startLeft = margin.left + ((d.depth - 1) * depthTab);
    d.data.yPos = margin.top + (i * rowHeight);
    d.data.expandLabel = d.data.name + (descendantCount && (d.data.descendantCount || 0) > 0  ? ` (${d.data.descendantCount})`: "");
    d.data.labelWidth = 35 + measureWidth(d.data.expandLabel, 12);
  })
  return treeData
}


export const addHierarchy = (data: HierarchyBase,startingDepth: number, baseKey: string, filterIds: string[], expandAll: boolean) => {

  let hierarchyData = d3.hierarchy(data);
  if(expandAll){
    startingDepth = d3.max(hierarchyData, (d) => d.depth) || startingDepth;
  }
  if(baseKey !== ""){
    // baseKey starts the hierarchy at a different base if it exists
    const baseKeyNode = hierarchyData.descendants().find((f) => f.data.id === baseKey);
    if(!baseKeyNode){
      // console.error(`no matching id for baseKey: ${baseKey}`)
    } else {
      hierarchyData = baseKeyNode;
    }
  } else if (filterIds.length > 0){
    // filterIds filters the data to only include to only show roots of ids provided
    const filteredData: string[] = [];
    // can only do one or the other, baseKey defaults to priority
    filterIds.forEach((d) => {
      const filterIdNode = hierarchyData.descendants().find((f) => f.data.id === d);
      if(!filterIdNode){
        // console.error(`no matching id for filterId: ${d}`)
      } else {
        // add ancestors (which includes this node) to filteredData if not there already
        filterIdNode.ancestors().forEach((a) => {
          if(!filteredData.some((s) => s === a.data.id)){
            filteredData.push(a.data.id || "");
          }
        })
      }
    })
     hierarchyData.descendants().forEach((d) => {
      if(d.children){
        d.children = d.children.filter((f) => filteredData.includes(f.data.id || ""));
        if(d.children.length === 0){
          // reset 0 length to undefined so tree works as anticipated
          d.children = undefined;
        }
      }
      })
  }
  hierarchyData.eachBefore((d,i) => {
    // eslint-disable-next-line no-param-reassign
    d.data.hOrderPosition = i;
    d.data.descendantCount =  d.descendants().length - 1;
  })
  hierarchyData.descendants().forEach((d) => {
    if(d.children){
      if(d.depth > startingDepth){
        d.data._children = d.children;
        d.children = undefined;
      }
    }
  })


  return hierarchyData;
}

export const checkOntology = (iconType: string,  findIcon: (classUri: string) => IconStyle) => {
  const flatOntology = findIcon(iconType);

  if(!flatOntology.faUnicode){
    flatOntology.faIcon = "";
    flatOntology.faUnicode = flatOntology.iconFallbackText;
    flatOntology.shape = "roundrectangle";
  }
  return flatOntology as Required<IconStyle>;
}
