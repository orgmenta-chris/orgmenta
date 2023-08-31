
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { userState } from '../../../states/navigation/userState'
import { useAuthSession } from '../../../utils/auth'

export default function UserWidget() {
    const auth = useAuthSession({})
    const toggle:any = userState()
    return (
        <View style={{height:50, flexDirection:'row', gap:10}}>
            <Pressable 
                onPress={()=>{toggle.update(!toggle.active)}}
            >
                <Text> user | {auth?.data?.session === null ? 'Guest' : 'logged in' }</Text>
            </Pressable>
        </View>
    )
}