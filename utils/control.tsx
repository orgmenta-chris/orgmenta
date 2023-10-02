// A 'Control' is a filtering, sorting, grouping, or viewing of entity display data.
// Chris todo

import { View } from "react-native";
import { ViewPresetOptions } from "./presets";

// Main

export const ViewControlMain = ({}: any) => {
  return (
    <View style={{ flexDirection: "row", gap: 10, borderWidth: 1 }}>
      {/* Presets are saved views for filtering, sorting, grouping (etc.) entities. See presets.tsx. */}
      {/* <Text>CONTROL</Text>
      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Presets<ViewPresetOptions/></Text>
      
        
      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Group</Text>

            <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Sort</Text>

      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Filter</Text> */}
    </View>
  );
};
