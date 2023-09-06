// A 'Control' is a filtering, sorting, grouping, or viewing of entity display data.

import React from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';

// Tabs

// Placeholder component (Chris is working on this)
export const ViewControlMain = ({}:any) => {
  return (
    <View style={{flexDirection:'row', gap:10}}>
      <Text>Group</Text>
      <Text>Sort</Text>
      <Text>Filter</Text>
      <Text>View</Text>
    </View>
  )
}

