

import { StyleSheet, Text, View, Pressable} from 'react-native';
import { spaceState } from '../../../states/navigation/spaceState'

export default function SpaceWidget() {
    const toggle:any = spaceState()
    return (
        <View style={{height:50, flexDirection:'row', gap:10}}>
            <Pressable 
                onPress={()=>{toggle.update(!toggle.active)}} 
                // onPress={()=>{console.log(toggle)} }
            >
                <Text> space</Text>
            </Pressable>
        </View>
    )
}


