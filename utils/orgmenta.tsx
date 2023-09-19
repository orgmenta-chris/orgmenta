import React from 'react'
import { Text, View} from 'react-native'
import { ViewModalMain } from './modal'
import { data } from "./static";
import { Expandable } from '../components/expandable'
import { Link } from 'react-router-dom'


export const ViewOrgmentaModal = (props:any) => {
    return (
        <ViewModalMain modalName={'orgmenta'} backdrop height={'25%'} width={'100%'}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text style={{fontWeight:800, fontSize: 18, color: "#0c4a73", padding: 5}}>App</Text>
                    <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Home</Link>
                    <Link to={'pricing'} style={{textDecoration:'none', color:'black'}}>Pricing</Link>
                    <Link to={'roadmap'} style={{textDecoration:'none', color:'black'}}>Roadmap</Link>
                    <Link to={'enhancements'} style={{textDecoration:'none', color:'black'}}>Enhancement Requests</Link>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text  style={{fontWeight:800, fontSize: 18, color: "#0c4a73", padding: 5}}>Company</Text>
                    <Link to={'about'} style={{textDecoration:'none', color:'black'}}>About</Link>
                    <Link to={'privacy'} style={{textDecoration:'none', color:'black'}}>Privacy</Link>
                    <Link to={'terms'} style={{textDecoration:'none', color:'black'}}>Terms</Link>
                    <Link to={'contact'} style={{textDecoration:'none', color:'black'}}>Contact</Link>
                    <Link to={'partners'} style={{textDecoration:'none', color:'black'}}>Partner with us</Link>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text  style={{fontWeight:800, fontSize: 18, color: "#0c4a73", padding: 5}}>Community</Text>
                    <Link to={'forums'} style={{textDecoration:'none', color:'black'}}>Forums</Link>
                    <Link to={'guides'} style={{textDecoration:'none', color:'black'}}>Guides</Link>
                </View>
            </View>
        </ViewModalMain>
    );
  };