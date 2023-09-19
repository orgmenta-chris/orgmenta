import { Text, View} from 'react-native'
import { ViewModalMain } from './modal'
import { Link } from 'react-router-dom'


export const ViewOrgmentaModal = (props:any) => {
    return (
        <ViewModalMain modalName={'orgmenta'} backdrop height={190} width={'100%'}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text style={{fontWeight:'800', fontSize: 18, color: "#0c4a73", padding: 5}}>App</Text>
                    <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Home</Link>
                    <Link to={'app/pricing'} style={{textDecoration:'none', color:'black'}}>Pricing</Link>
                    <Link to={'app/product'} style={{textDecoration:'none', color:'black'}}>Product</Link>
                    <Link to={'app/roadmap'} style={{textDecoration:'none', color:'black'}}>Roadmap</Link>
                    <Link to={'app/compare'} style={{textDecoration:'none', color:'black'}}>Compare to Competitors</Link>
                    <Link to={'app/industries'} style={{textDecoration:'none', color:'black'}}>Use cases per industry</Link>
                    <Link to={'app/frameworks'} style={{textDecoration:'none', color:'black'}}>Use cases per industry</Link>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text style={{fontWeight:'800', fontSize: 18, color: "#0c4a73", padding: 5}}>Company</Text>
                    <Link to={'company/about'} style={{textDecoration:'none', color:'black'}}>About</Link>
                    <Link to={'company/privacy'} style={{textDecoration:'none', color:'black'}}>Privacy</Link>
                    <Link to={'company/terms'} style={{textDecoration:'none', color:'black'}}>Terms</Link>
                    <Link to={'company/contact'} style={{textDecoration:'none', color:'black'}}>Contact</Link>
                    <Link to={'company/partners'} style={{textDecoration:'none', color:'black'}}>Partner with us</Link>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text style={{fontWeight:'800', fontSize: 18, color: "#0c4a73", padding: 5}}>Community</Text>
                    <Link to={'community/forums'} style={{textDecoration:'none', color:'black'}}>Forums</Link>
                    <Link to={'community/guides'} style={{textDecoration:'none', color:'black'}}>Guides</Link>
                    <Link to={'community/enhancements'} style={{textDecoration:'none', color:'black'}}>Enhancement Requests</Link>
                </View>
            </View>
        </ViewModalMain>
    );
  };