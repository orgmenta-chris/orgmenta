// This is a placeholder file.
// Loisa: feel free to find a library (or roll your own solution if none exist) that works on web,ios and android that
// takes json and makes it into a collapsible tree / collapsible nested list.
// Something like this library (although this one looks unmaintained, so you might choose something else or consider forking/replicating it etc. with me): https://github.com/zaguiini/react-native-final-tree-view

import { ScrollView, TextInput, View, Text, Pressable } from 'react-native';


// Main

export const ViewJsonMain = (Input:any) => {
    return (
        // Placeholder. This will eventually allow for collapsing/expanding json nodes.
        <ScrollView style={{height:400}}>
            <Text style={{flex:1}}> 
                {JSON.stringify(Input,null,2)}
            </Text>
        </ScrollView>
    )
}
  