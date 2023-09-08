// Chris is working on this.
// It is a form of display (alongside calendar, table etc.).
// This display is resizable 'pods' that can be moved around on a grid, pinned etc.
// E.g. on the 'invoicing' category entity, you could pin an 'unsent invoices count' widget to to this display.

import { useState, useReducer, useEffect, useMemo} from "react"
import { Link, useLocation } from 'react-router-dom'
import { ScrollView, TextInput, View, Text, Pressable } from 'react-native';
import { data } from './static'
import { ViewListMain } from './list'


// Main

export const ViewPodsMain = ({items,children}:any) => {
    return (
        <View>
          {children}
          {/* <Text>{JSON.stringify({items})}</Text> */}
        </View>
    )
}


/// Example

// Temporary examplepod
export const ViewPodExample=() => { 
  return (
      <View style={{flexDirection:'column', borderWidth:1, borderColor:'white', margin: 4}}>
          <View style={{height: 40, backgroundColor:'lightgray'}}>
              <Text style={{fontSize:16, fontStyle:'italic'}}>Another Example Pod</Text>
              <Text style={{fontSize:12}}>To be replaced with dynamic pods using db data</Text>
          </View>
      </View>
  )
}



// Title

// A pod to show information on the currently selected entity
// This is using static data for categories only at the moment (e.g. Accounts-Payables-Bills), but will eventually be a dynamic component using  db data.
export const ViewPodInfo =() => { 
    // At the moment, this shows static info for categories (e.g. governance > model > plan) from static.js
    // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
    const path = useLocation()?.pathname?.split('/');
    const process = data?.find(x=>x.nickname===path[2]);
    const subprocesses = process && data.filter(x=>x.parent===process.id);
    const parent = data?.find(y=>y.id===process?.parent);
    const grandparent = data?.find(z=>z.id===parent?.parent);
    return (
        <View style={{flexDirection:'column', borderWidth:1, margin: 4}}>
            <View style={{height: 40, backgroundColor:'lightgray'}}>
                <Text style={{fontSize:16, fontStyle:'italic'}}>{process?.description}</Text>
                <Text style={{fontSize:12}}>{process?.summary}</Text>
            </View>
            {/* <Text style={{fontSize:12, height: 200, backgroundColor:'lightgray',overflow:'scroll'}}>
                {process.subheading}
            </Text> */}
            {/* TESTING */}
            {/* <Text style={{fontSize:12, height: 200, backgroundColor:'lightgray',overflow:'scroll'}}>
                {JSON.stringify({grandparent,parent,process,subprocesses},null,2)}
                {JSON.stringify({process},null,2)}
            </Text> */}

        </View>
    )
}


// Tabs

// A component to show entity 'tabs' (e.g. Accounts > Payables > Bills/Payments/etc)
// This is using static data for categories only at the moment, but will eventually be a dynamic component using  db data.
export const ViewPodTabs =() => { 
    // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
    // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
    const path = useLocation()?.pathname?.split('/');
    const process = data?.find(x=>x.nickname===path[2]);
    const subprocesses = process && data.filter(x=>x.parent===process.id);
    const parent = data?.find(y=>y.id===process?.parent);
    const grandparent = data?.find(z=>z.id===parent?.parent);
    return (
        <View style={{flexDirection:'column', borderWidth:1, margin: 4}}>            
            {/* Tabs for each subprocess */}
            <View style={{flexDirection:'row', height: 40}}>
                {subprocesses?.map((x,i)=>
                    <Link style={{flex: 1}} key={i} to={`/entity/` +x.nickname}>
                        <Text>{x.display_singular}</Text>
                    </Link>
                )}
            </View>

            {/* Info on the current process (move this into pods*/}
            {/* <Text style={{fontSize:12, height: 200, backgroundColor:'lightgray',overflow:'scroll'}}> */}
                {/* {JSON.stringify({division,department,process},null,2)} */}
            {/* </Text> */}

        </View>
    )
}


// List

// A pod to show a list (e.g. of related entities)
// This isn't manipulating the list yet, but it will eventually allow the user to have a pod that has a filtered/custom list in their pods view.
// Example usage: an Invoice might have a 'line items' or 'payments' list that shows all the payments made against it in list form.
export const ViewPodList =({columns,data,title}:any) => { 
    return (
        <View style={{flexDirection:'column', borderWidth:1, margin: 4}}>  
            <Text>{title || 'ViewPodList'}</Text>
            <ViewListMain columns={columns} data={data} />  
        </View>
    )
}



