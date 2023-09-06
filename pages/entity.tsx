import { View } from 'react-native';
import { ViewProcessesTitle} from '../components/entity/processTabs'
import { ViewDisplayMain, ViewDisplayTabs } from'../utils/display'
import { ViewActionTabs as ViewDisplayActions } from'../utils/action'
import React from 'react';
  

export default function Entity() { 
    return (
        <View style={{flexDirection:'column', flex: 1}}>

            {/* Title / breadcrumbs */}
            <ViewProcessesTitle/>

            {/* Show the entity array (in whichever mode is selected, e.g. Calendar, Table etc.) */}
            <View style={{flex:1,backgroundColor:'lightgray'}}>
                <ViewDisplayMain/>
            </View>

            {/* Show links/tabs for Calendar, List, Table etc. */}
            <ViewDisplayTabs/>

            {/* Show the actions tabs/links (e.g. add,edit,copy,delete,share etc.*/}
            <ViewDisplayActions style={{flex:1}}/>
            
        </View>
    )
}