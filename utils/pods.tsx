// Chris is working on this.
// It is a form of display (alongside calendar, table etc.).
// This display is resizable 'pods' that can be moved around on a grid, pinned etc.
// E.g. on the 'invoicing' category entity, you could pin an 'unsent invoices count' widget to to this display.

import { useState, useReducer, useEffect, useMemo} from "react"
import { Link, useLocation } from 'react-router-dom'
import { ScrollView, TextInput, View, Text, Pressable } from 'react-native';

 
// Main

export const ViewPodsMain = ({items,children}:any) => {
    return (
        <View>
          {children}
          {/* <Text>{JSON.stringify({items})}</Text> */}
        </View>
    )
}
