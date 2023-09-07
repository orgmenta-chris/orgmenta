// A 'Control' is a filtering, sorting, grouping, or viewing of entity display data.

import React from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';
import {ViewPresetOptions} from './presets'
// 

// Tabs

// Placeholder component (Chris is working on this)
export const ViewControlMain = ({}:any) => {
  return (
    <View style={{flexDirection:'row', gap:10}}>

      {/* Presets are saved views for filtering, sorting, grouping (etc.) entities. See presets.tsx. */}
      <Text>Presets</Text>
      <ViewPresetOptions/>
        
      <Text>Group</Text>

      <Text>Sort</Text>

      <Text>Filter</Text>

    </View>
  )
}

