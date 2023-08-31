


import { StyleSheet, Text, View } from 'react-native';
import { ViewSpaceItem, ViewSpaceArray} from '../utils/space'
import { ViewEntitySwitch, ViewEntityArray} from '../utils/entity'


export default function Home() { 
    return (
        <View style={{flexDirection:'column'}}>
            <Text>Entities Page</Text>
            <ViewEntityArray/>
            <ViewEntitySwitch/>
        </View>
    )
}
