import React from 'react'
import { ScrollView } from 'react-native'
import { ViewModalMain } from './modal'
import { data } from "./static";
import { Expandable } from '../components/expandable'


export const ViewBrowseModal = (props:any) => {
    return (
        <ViewModalMain modalName={'browse'} backdrop pinnable top={60}>
            
        </ViewModalMain>
    );
  };