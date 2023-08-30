

import { StyleSheet, Text, View, Pressable } from 'react-native';
import { userState } from '../../../states/navigation/userState'

export default function UserWidget() {
    const toggle:any = userState()
    return (
        <View style={{height:50, flexDirection:'row', gap:10}}>
            <Pressable 
                onPress={()=>{toggle.update(!toggle.active)}} 
                // onPress={()=>{console.log(toggle)} }
            >
                <Text> user</Text>
            </Pressable>
        </View>
    )
}