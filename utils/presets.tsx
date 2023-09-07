// A 'preset' is a control for a 'display' to allow a saved view for filtering, sorting, grouping (etc.) entities.
// e.g. you might have a saved preset called 'My new messages' that was a view to show incoming messages to that user, sorted by date_received.
// Chris is handling this for now.

import { TextInput, View, Text, Pressable } from 'react-native';


// Placeholder component (Chris is working on this)
// A select/dropdown component to allow a user to switch presets.
export const ViewPresetOptions = ({}:any) => {
    return (
      <View style={{flexDirection:'column', gap:10}}>
  
        {/* Presets are saved views for filtering, sorting, grouping (etc.) entities. See presets.tsx. */}
        <Text>Preset1</Text>
  
        <Text>Preset2</Text>
  
        <Text>New Preset</Text>
  
      </View>
    )
  }
  