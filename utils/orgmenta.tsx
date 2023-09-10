import React from 'react'
import { ScrollView } from 'react-native'
import { ViewModalMain } from './modal'
import { data } from "./static";
import { Expandable } from '../components/expandable'
import { Link } from 'react-router-dom'


export const ViewOrgmentaModal = (props:any) => {
    return (
        <ViewModalMain modalName={'orgmenta'} backdrop top={60} height={'20%'}>
            <Link to={'/'}>Home</Link>
        </ViewModalMain>
    );
  };