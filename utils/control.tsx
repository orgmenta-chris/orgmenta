// A 'Control' is a filtering, sorting, grouping, or presets of entity display data.
// Chris todo

import { ViewContainerStatic } from "./container";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";
import { ViewPresetOptions } from "./preset";

// Main

export const ViewControlMain = ({}: any) => {
  return (
    <ViewContainerStatic
      style={{ flexDirection: "row", gap: 10, borderWidth: 1 }}
    >
      <ViewTypographyText>
        (Presets, Filters, Sorting, Grouping)
      </ViewTypographyText>
      {/*
      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Presets<ViewPresetOptions/></Text>
      
        
      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Group</Text>

            <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Sort</Text>

      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Filter</Text> */}
    </ViewContainerStatic>
  );
};
