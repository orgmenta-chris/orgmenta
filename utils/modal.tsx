
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { ViewIconMain } from './icon'


// Meta

const metaModalInfo = {
    description: "A UI widget to appear floating on a different surface to other components",
    notes: "This modal is an alternative to React Native's own modal component, which has limitations to it that this module solves",
    todo: [
        "When pinned, embed the modal (switch off modal mode) into the parent view (i.e. switch off position: absolute)",
        "Positioning and sizing: Allow for the modal to be rendered in specific sizes and locations via props passed through"
    ]
}


// Main (the main modal view - use this comprehensive component to get all of the available modal features)

export const ViewModalMain = ({height, margin, padding, pinnable, children, modalName, backdrop, top, bottom, left, right, width}:any) => {
    const modalState = useModalState(modalName);
    if(modalState?.data?.visible) { return (<>
        {backdrop && !modalState?.data?.pinned && 
            <ViewModalBackdrop modalName={modalName}/>
        }
        <ViewModalBody modalName={modalName} height={height} margin={margin} padding={padding} pinnable={pinnable} top={top} bottom={bottom} left={left} right={right} width={width} children={children}/>
    </>)
    }else{
        return <></>
    }
}


// Visibility (whether or not a modal is being shown on screen)

export const useModalVisibility = (modalName:string) => {
    const queryClient = useQueryClient();
    return () => {
        queryClient.setQueryData(['modal', modalName], (oldData: any) => {
          return {...oldData, visible: !oldData?.visible};
        });
      };
}


// Pinned (whether or not a modal is embedded into the page, or floating above it on another surface)

export const useModalPinned = (modalName:string) => {
    const queryClient = useQueryClient();
    return () => {
        queryClient.setQueryData(['modal', modalName], (oldData: any) => {
          return {...oldData, pinned: !oldData?.pinned};
        });
      };
}


// State (get the modal state - which has 'pinned', 'visibility' and other properties)

export const useModalState = (modalName:string) => {
    const queryClient = useQueryClient();
    const query = useQuery({
            queryKey: ['modal',modalName], 
            queryFn: ()=>null,
            // initialData: () => queryClient.getQueryData(['modal', modalName]) || null,
            // staleTime: Infinity // This means the data will never become stale automatically
            refetchOnWindowFocus:false
    });
    return query;
}



// Controls (The modal controls that appear in the modal to pin/unpin, show/hide etc.)

export const ViewModalControls = ({modalName, pinnable,top,bottom,left,right}:any) => {
    // const test = useModalVisibility(modalName)
    return (
        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
            
            {/* <Pressable onPress={test}><Text>Toggle</Text></Pressable> */}
            <Pressable
                onPress={useModalVisibility(modalName)}
            >
                <ViewIconMain name={'caretup'} source={'AntDesign'} color='black'/>
            </Pressable>
            {pinnable &&  
                <Pressable
                    onPress={useModalPinned(modalName)}
                >
                    <ViewIconMain name={'pin'} source={'MaterialCommunityIcons'} color='black'/>
                </Pressable>
            }
        </View>
    )
}


// Body (The modal content container, i.e. the visible part of the modal)

export const ViewModalBody = ({height,margin, padding,modalName, pinnable, children, top,bottom,left,right, width}:any) => {
    return (
        <View
            style={{
                alignSelf:'center',
                backgroundColor:'white',
                flex:1,
                flexDirection:'column',
                minWidth:width||'12.5%',
                width:width||'12.5%',
                height:height||"100%",
                top:top||0,bottom:bottom||0,left:left||0,right:right||0,
                position:'absolute',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
            }}
        >
            <ViewModalControls modalName={modalName} pinnable={pinnable}/>
            {children}
        </View>
    )
}


// Backdrop (if the modal isn't pinned and 'backdrop' is enabled, then this overlay behind the modal body will appear and when clicked will close the modal)

export const ViewModalBackdrop = ({modalName}:any) => {
    return (
        <Pressable 
            onPress={useModalVisibility(modalName)}
            style={{
                // backgroundColor:'red',
                backgroundColor:'rgba(0,0,0,0.2)',
                width:'100%',
                height:'100%',
                position:'absolute',
            }}
        />
    )
}


// Examples

// (Example component to show the modal state toggle functionality)
export const ViewModalState = ({modalName}:any) => {
    const modalState = useModalState(modalName);
    return (<>
        <ViewModalToggle/>
        <Text>{JSON.stringify(modalState?.data,null,2)}</Text>
    </>)
}

// (Example button to toggle the modal state value)
export const ViewModalToggle = ({modalName}:any) => {
    return (
        <Pressable onPress={useModalVisibility(modalName)}><Text>Toggle</Text></Pressable>
    )
}
