// Chris is working on this.
// It is a form of display (alongside calendar, table etc.).
// This display is resizable 'pods' that can be moved around on a grid, pinned etc.
// E.g. on the 'invoicing' category entity, you could pin an 'unsent invoices count' widget to to this display.

import { ViewListMain } from '../../../utils/list'
import { Link, useLocation } from 'react-router-dom'
import { View, Text, ScrollView } from 'react-native';

import { data } from '../../../utils/static'


// Main

// A container for all of the pods
export const ViewPodMain = ({items,children}:any) => {
    return (
        <ScrollView style={{padding:4}}>
          {children}
          {/* <Text>{JSON.stringify({items})}</Text> */}
        </ScrollView>
    )
}


// Frame

// A container for each pod
export const ViewPodFrame = ({children, style}:any) => {
    return (
        <View style={{height:40, flexDirection:'column', borderWidth:1, backgroundColor:'lightgray', borderColor:'white', margin: 4,...style, }}>
            {children}
        </View>
    )
}


// Example

// Temporary examplepod
export const ViewPodExample=({}:any) => { 
  return (
      <ViewPodFrame>
        <Text style={{fontSize:16, fontStyle:'italic'}}>Another Example Pod</Text>
        <Text style={{fontSize:12}}>To be replaced with dynamic pods using db data</Text>
      </ViewPodFrame>
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
        <ViewPodFrame>
            <Text style={{fontSize:16, fontStyle:'italic'}}>{process?.description}</Text>
            <Text style={{fontSize:12}}>{process?.summary}</Text>
        </ViewPodFrame>
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
        <ViewPodFrame style={{flexDirection:'row'}}>            
            {/* Tabs for each subprocess */}
            {subprocesses?.map((x,i)=>
                <Link style={{flex: 1}} key={i} to={`/entity/` +x.nickname}>
                    <Text>{x.display_singular}</Text>
                </Link>
            )}
        </ViewPodFrame>
    )
}


// List

// A pod to show a list (e.g. of related entities)
// This isn't manipulating the list yet, but it will eventually allow the user to have a pod that has a filtered/custom list in their pods view.
// Example usage: an Invoice might have a 'line items' or 'payments' list that shows all the payments made against it in list form.
export const ViewPodList =({columns,data,title}:any) => { 
    return (
        <ViewPodFrame>  
            <Text>{title || 'ViewPodList'}</Text>
            <ViewListMain columns={columns} data={data} />  
        </ViewPodFrame>
    )
}



