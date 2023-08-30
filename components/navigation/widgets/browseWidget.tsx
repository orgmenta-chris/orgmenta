

import { StyleSheet, Text, View, Pressable } from 'react-native';
import { browseState } from '../../../states/navigation/browseState'

export default function BrowseWidget() {
    const toggle:any = browseState()
    return (
        <View style={{height:50, flexDirection:'row', gap:10}}>
            <Pressable 
                onPress={()=>{toggle.update(!toggle.active)}} 
                // onPress={()=>{console.log(toggle)} }
            >
               <Text> browse</Text>
            </Pressable>
        </View>
    )
}


