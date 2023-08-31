import { StyleSheet, Text, View, Pressable } from 'react-native';
import { userState } from '../../../states/navigation/userState'
import { useAuthSession } from '../../../utils/auth'
import { useState } from 'react'
import {UserModal} from '../widgets/modals/userModal'

export default function UserWidget() {
    const auth = useAuthSession({})
    const toggle:any = userState() 
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{height:50, flexDirection:'row', gap:10}}>
            <Pressable 
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text> user | {auth?.data?.session === null ? 'Guest' : 'logged in' }</Text>
            </Pressable>
            <UserModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    )
}
