

import { StyleSheet, Text, View } from 'react-native';
import { ViewAuthForm, ViewAuthDetails} from '../utils/auth'

export default function UserPage() {
    return (
        <View style={{flexDirection:'column'}}>
            <Text style={{fontWeight:700}}>USER PAGE</Text>
            <ViewAuthForm/>
            <ViewAuthDetails/>
        </View>
    )
}