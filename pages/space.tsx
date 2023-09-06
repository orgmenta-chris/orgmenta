


import { StyleSheet, Text, View } from 'react-native';
import { ViewSpaceArray } from '../utils/space'

export default function SpacePage() {
    return (
        <View>
            <Text style={{fontSize:24}}>Spaces</Text>

            <ViewSpaceArray/>
            
            {/* <ViewSpaceInt/> */}
        </View>
    )
}
