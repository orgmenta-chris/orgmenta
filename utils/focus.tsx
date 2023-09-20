// A 'Focus' is the primary entity being studied / viewed

import { View, Text } from 'react-native';
import { Link, useLocation } from 'react-router-dom'
import { data } from './static'


// Main

export const ViewFocusMain = ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
      
      <ViewFocusHeader/>
      {/* <ViewFocusInfo/>
      <ViewFocusTabs/> */}
      
    </View>
  )
}


// Header

// A header/title/breadcrumb section for the Entity Focus
export const ViewFocusHeader=() => { 
    // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
    // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
    const path = useLocation()?.pathname?.split('/');
    const process = data?.find(x=>x.nickname===path[2]);
    const subprocesses = process && data.filter(x=>x.parent===process.id);
    const parent = data?.find(y=>y.id===process?.parent);
    const grandparent = data?.find(z=>z.id===parent?.parent);
    return (
        <View style={{flexDirection:'column'}}>
            
            {/* Title of the current process (breadcrumbs) */}
            <Text style={{fontSize:24, height: 30}}>
                {grandparent?.id && grandparent?.id > 9  && <> <Link to={'/entity/'+grandparent.nickname}>{grandparent.display_singular}</Link>{' > '}</>}
                {parent?.id && parent?.id > 9  && <> <Link to={'/entity/'+parent.nickname}>{parent.display_singular}</Link>{' > '}</>}
                {process?.display_singular}
            </Text>

        </View>
    )
}


// Title

// A temporary component to show information on the currently selected processs (e.g. Accounts-Payables-Bills)
// This is using static data at the moment, but will eventually be a dynamic component using  db data.
export const ViewFocusInfo =() => { 
    // At the moment, this shows static info for categories (e.g. governance > model > plan) from static.js
    // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
    const path = useLocation()?.pathname?.split('/');
    const process = data?.find(x=>x.nickname===path[2]);
    const subprocesses = process && data.filter(x=>x.parent===process.id);
    const parent = data?.find(y=>y.id===process?.parent);
    const grandparent = data?.find(z=>z.id===parent?.parent);
    return (
        <View style={{flexDirection:'column', borderWidth:1, borderColor:'white', margin: 4}}>
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

// A temporary component to show focus entity tabs (e.g. Accounts > Payables > Bills/Payments/etc)
// This is using static data at the moment, but will eventually be a dynamic component using  db data.
export const ViewFocusTabs =() => { 
    // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
    // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
    const path = useLocation()?.pathname?.split('/');
    const process = data?.find(x=>x.nickname===path[2]);
    const subprocesses = process && data.filter(x=>x.parent===process.id);
    const parent = data?.find(y=>y.id===process?.parent);
    const grandparent = data?.find(z=>z.id===parent?.parent);
    return (
        <View style={{flexDirection:'column', borderWidth:1, borderColor:'white', margin: 4}}>            
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
