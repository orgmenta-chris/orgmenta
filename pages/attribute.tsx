


import { StyleSheet, Text, View } from 'react-native';
import { ViewAttributeMain, ViewAttributeUnioned} from '../utils/attribute'
import { BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom';

export default function UserPage() {
    return (
        <View>
            <Text style={{fontSize:24}}>Attributes</Text>
            <View style={{flexDirection:'row'}}>
                <Link to={'main'} style={{margin: 5}}>Main</Link>
                <Link to={'unioned'} style={{margin: 5}}>Unioned</Link>
            </View>
            <Routes>
                <Route
                  path="main"
                  element={<ViewAttributeMain />}
                />
                <Route
                  path="unioned"
                  element={<ViewAttributeUnioned />}
                />
            </Routes>
            {/* <ViewAttributeMain/> */}
        </View>
    )
}
