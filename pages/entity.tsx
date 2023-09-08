import React from 'react';
import { View, Text } from 'react-native';
import { ViewDisplayMain, ViewDisplayTabs } from'../utils/display'
import { ViewActionTabs } from'../utils/action'
import { ViewFocusMain } from'../utils/focus'
import { ViewWidgetMain } from '../utils/widget'
import { useApiItems,mapApiSource } from '../utils/api'
import { ViewControlMain} from '../utils/control'


export default function Entity() {
    return (
        <View style={{flexDirection:'column', height: "100%"}}>

            {/* Show the entity focus (the primary record being viewed) */}
            <ViewFocusMain/>

            {/* <View style={{flex:1,height:111,minHeight:"100%",flexGrow:999,backgroundColor:'blue'}}><Text>s</Text></View> */}
            {/* Show the auxiliary entities (in whichever mode is selected, e.g. Calendar, Table etc.) */}
            <ViewDisplayMain/>
            
            {/* Placholder (Chris is working on this) - A panel for filtering/grouping/sorting */}
            <ViewControlMain/>


            {/* Show links/tabs for Calendar, List, Table etc. */}
            <ViewDisplayTabs/>

            {/* Show the actions tabs/links (e.g. add,edit,copy,delete,share etc.*/}
            <ViewActionTabs/>
            
        </View>
    )
}