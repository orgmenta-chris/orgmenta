// Loisa: feel free to take this one.
// This is currently just a placeholder.
// 'List' needs to be a reusable component that will render a list of items in a ScrollView or FlatList (your choice).
// The items need to have headers along with collapsible/expandable bodies (like in the sidebar).
// Once that's done, then we can discuss how best to render items correctly (i.e. how&what attributes to render in the header and in the collapsible body)

import { useState, useReducer, useEffect, useMemo} from "react"
import { Link, useLocation } from 'react-router-dom'
import { ScrollView, TextInput, View, Text, Pressable } from 'react-native';
 

// Main

export const ViewListMain = ({...Input}) => {

  const [data, setData] = useState([]);
  useEffect(() => {
      if (Input?.data) {
          setData(Input.data);
      }
  }, [Input?.data]);

  // When columns are provided, set the columns to state
  const [columns, setColumns] = useState([]);
  useEffect(() => {
      if (Input?.columns) {
        setColumns(Input.columns);
      }
  }, [Input?.data]);

  return (
    // PLACEHOLDER:
    <View >
      {data?.map((x,i)=><View key={i} style={{flex:1, margin:5,backgroundColor:'gray', minHeight:50}}>
        <Text style={{color:'white'}}>{x.title}</Text>
      </View>)}
    </View>
  )
}  
