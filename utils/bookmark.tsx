import React from 'react'
import { ScrollView } from 'react-native'
import { ViewModalMain } from './modal'
import { data } from "./static";
import { Expandable } from '../components/expandable'


export const ViewBookmarkModal = (props:any) => {
    return (
        <ViewModalMain modalName={'bookmark'}  backdrop pinnable  height={'100%' /*temp hack by Chris*/} >
            <ScrollView style={{height:'80%'}}
            >
                {
                    data // temporary array that contains all the navigation objects
                    .filter(
                        (x) => (x.status === "3. Active" || __DEV__) && x.parent === 1
                    ) // if in production, only show active modules
                    .map((x, i) => (
                        <Expandable item={x} key={i} />
                    )) // display the name only (temporary, to be replaced with link)
                }
            </ScrollView>
        </ViewModalMain>
    );
  };