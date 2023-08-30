
import {useState} from 'react'
import {View, Pressable, Text} from 'react-native'
import { data } from '../utils/static'
import {Link} from 'react-router-dom'

export const Expandable = ( {item}:any ) => {
    const [expanded, expandedToggle] = useState(false);
    return (
        <View
            style={{
                flexDirection: 'column',
                // flex: 1,
                backgroundColor: 'red',
            }}
        >
            <Pressable
                onPress={()=>expandedToggle((oldValue)=>!oldValue)}
                style={{
                    minHeight:40,
                    flexDirection: 'row',
                    flex: 1,
                    // backgroundColor: 'blue',
                }}
            >
                <Text style={{flexGrow:1}}>{item.display_singular}</Text>
                <Text>{expanded?' ^ ':' V '}</Text>
            </Pressable>
            {expanded && 
                <View
                    style={{
                        // flexDirection: 'column',
                        flex: 1,
                        flexGrow:1,
                        minHeight:200,
                        // backgroundColor: 'orange',
                    }}
                >
                { data
                    .filter(x=>(x.status==="3. Active" || __DEV__) && x.parent===item.id)
                    .map((x,i)=> <Link to={item.name_singular + '/' + x.name_singular} key={i}><Text>{x.display_singular}</Text></Link> ) 
                }
                </View>
            }
        </View>
    )
}
