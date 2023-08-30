

import { StyleSheet, Text, View } from 'react-native';
import { data } from '../../utils/static'
import SpaceWidget from './widgets/spaceWidget'
import UserWidget from './widgets/userWidget'
import BrowseWidget from './widgets/browseWidget'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <View style={{height:50, flexDirection:'row', gap:10}}>
            <SpaceWidget></SpaceWidget>
            <BrowseWidget></BrowseWidget>
            <Link to=''>Entities</Link>
            <UserWidget></UserWidget>
        </View>
    )
}


