import React from 'react';
import { View } from 'react-native';
import { ViewDisplayMain, ViewDisplayTabs } from'../utils/display'
import { ViewActionTabs } from'../utils/action'
import { ViewFocusMain } from'../utils/focus'
import { ViewWidgetMain } from '../utils/widget'
import { useApiItems,mapApiSource } from '../utils/api'
import { ViewControlMain} from '../utils/control'


export default function Entity() {
    return (
        <View style={{}}>

            {/* Show the entity focus (the primary record being viewed) */}
            <ViewFocusMain/>

            {/* Show the auxiliary entities (in whichever mode is selected, e.g. Calendar, Table etc.) */}
            <ViewDisplayMain/>

            {/* Show links/tabs for Calendar, List, Table etc. */}
            <ViewDisplayTabs/>

            {/* Placholder (Chris is working on this) - A panel for filtering/grouping/sorting */}
            {/* <ViewControlMain/> */}

            {/* Show the actions tabs/links (e.g. add,edit,copy,delete,share etc.*/}
            <ViewActionTabs/>
            
        </View>
    )
}