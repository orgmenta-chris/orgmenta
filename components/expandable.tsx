import { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { data } from '../utils/static'
import { ViewIconMain } from '../utils/icon'
import { Link } from 'react-router-dom'

export const Expandable = ( {item}:any ) => {
    const [expanded, expandedToggle] = useState(false);
    return (
        <View
            style={{
                flexDirection: 'column',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    // backgroundColor: 'red',
                }}
            >                
                <Link 
                    style={{
                        flex:3,
                        // backgroundColor: 'blue'
                    }} 
                    to={'entity/'+item.nickname}
                >
                        <Text selectable={false} >
                            {item.display_singular}
                        </Text>
                </Link>
                <Pressable
                    style={{}} 
                    onPress={()=>expandedToggle((oldValue)=>!oldValue)}
                    style={{
                        minHeight:40,
                        flexDirection: 'row',
                        flex: 1,
                        // backgroundColor: 'blue',
                    }}
                >
                    <ViewIconMain 
                        // padding={5}
                        // paddingTop={15}
                        name={expanded?'caretup':'caretdown'}
                        source={'AntDesign'}
                        color={'gray'}
                        // size={10}
                    />
                </Pressable>
            </View>
                
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
                    .map((x,i)=> <Link to={'entity/'+x.nickname} key={i}><Text selectable={false}>{x.display_singular}</Text></Link> ) 
                }
                </View>
            }
        </View>
    )
}