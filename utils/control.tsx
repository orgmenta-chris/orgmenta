// A 'Control' is a filtering, sorting, grouping, or viewing of entity display data.

import React from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';
import {ViewPresetOptions} from './presets'
// 

// Tabs

// Placeholder component (Chris is working on this)
export const ViewControlMain = ({}:any) => {
  return (
    <View style={{flexDirection:'row', gap:10, borderWidth:1}}>

      {/* Presets are saved views for filtering, sorting, grouping (etc.) entities. See presets.tsx. */}
      <Text>CONTROLS PANEL</Text>
      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Presets<ViewPresetOptions/></Text>
      
        
      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Group</Text>

      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Sort</Text>

      <Text style={{flexDirection:'row', gap:10, borderWidth:1}}>Filter</Text>

    </View>
  )
}

