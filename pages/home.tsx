// The home page will ideally just show a demo space + product information/ sales pitch, and a guest user if not logged in.
// If logged in, then it should also show the user a dropdown asking them if they want to set a default page when logged in.

import React, { useState } from "react";
import { Button, Text, View,Image, ScrollView } from "react-native";
import DocumentPicker from "../components/picker/DocumentPicker";
import useTokenStore from "../states/api/storeToken";
import { callMsGraph } from "../api/graphApiCall";

import Svg, { Path, G } from 'react-native-svg';


export default function Home() {
  const [pickedDocument, setPickedDocument] = useState([]);

  const token = useTokenStore((state: any) => state.token);

  const upload = (name: any, file: any) => {
    /*
    NOTE: If you are wondering why this function is void, 
    it is because after testing the upload function, 
    I decided to remove it again as I tried implementing the function using a react-query mutation.
    */
    return;
  };

  const fetchData = async (token: string) => {
    const data = await callMsGraph(token);

    console.log(data);
  };

  return (<>
    <View style={{padding: 10,flexDirection: "row", width:"100%"}}>

      {/* Left Column */}
      <View style={{alignItems: 'center', left: -50,height: 300,marginTop: 75, flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
        <Text>{`Navigate to your business\nmodules with `}<Text style={{fontWeight:800, color: "#0c4a73" }}>Bookmarks</Text></Text>
        <Text style={{left: -50}}>{`Manage your organisations and\nmembers with `}<Text style={{fontWeight:800, color: "#0c4a73"}}>Spaces</Text></Text>
      </View>

      {/* Middle Column */}
      <View style={{ height: 650,flex: 3,flexDirection: "column" }}>
        <Text style={{textAlign:'center', margin:25}}>{`Explore community, \ndocumentation and guides`}</Text>
        <View style={{padding: 50, borderColor: 'rgba(0, 0, 0, 0.15)', borderWidth: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
          <Image
            style={{
              resizeMode: 'stretch',
              aspectRatio:13/3, width:"100%"
            }}
            source={require('../assets/logo/full/color_cropped.png')}
          />
          <Text style={{textAlign:'center', fontSize:24, padding:10}}>Build and manage your business from a single pane of glass</Text>
          <Text style={{textAlign:'center', fontSize:18,  fontStyle:'italic'}}>{`Automate and manage your \n`}<Text style={{fontWeight:500, color: "#0c4a73" }}>IT Company / MSP / VAR / TSP / OED</Text></Text>
        </View>
        <Text style={{textAlign:'center', marginTop:75}}>{`Scroll down for more information`}</Text>
      </View>

      {/* Right Column */}
      <View style={{alignItems: 'center', right: -50, height: 300, marginTop: 75, flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
        <Text>{`Universal search and \nquick-add with `}<Text style={{fontWeight:800, color: "#0c4a73" }}>Browse </Text></Text>
        <Text>{`Manage your account\nand activity with `}<Text style={{fontWeight:800, color: "#0c4a73" }}>User </Text></Text>
      </View>
      
      {/* Bookmark Arrow */}
      <Svg style={{position:'absolute', top:-25, left: 30}} width="100" height="100" viewBox="0 0 100 100">
          {/* Pronounced Curved Arrow line */}
          <Path d="M38,90 C35,70 35,30 50,10" stroke="#22b2e4" strokeWidth="5" fill="none" />
          {/* Arrow */}
          <G transform="rotate(30 50 10)">
              <Path d="M50,10 L40,30 L50,10 L60,30 L50,10" stroke="#22b2e4" strokeWidth="5" fill="#22b2e4" />
          </G>
      </Svg>
      {/* Space Arrow */}
      <Svg style={{position:'absolute', top:-25, left: -100}} width="100" height="400" viewBox="0 0 100 400">
          {/* Extended Curved Arrow line */}
          {/* <Path d="M50,360 C25,260 25,140 58,15" stroke="#22b2e4" strokeWidth="5" fill="none" /> */}
          <Path d="M80,360 C35,260 35,140 58,15" stroke="#22b2e4" strokeWidth="5" fill="none" />

          {/* Rotated Arrowhead */}
          <G transform="rotate(20 50 40)">
            <Path d="M50,10 L40,30 L50,10 L60,30 L50,10" stroke="#22b2e4" strokeWidth="5" fill="#22b2e4" />
          </G>
      </Svg>
      {/* Orgmenta/Site Arrow */}
      <Svg width="100" height="100" style={{position:'absolute', width: "100%", top: -15}} viewBox="0 0 100 100">
          {/* Arrow line */}
          <Path d="M50,50 L50,10" stroke="#22b2e4" strokeWidth="5" fill="none" />
          {/* Arrowhead */}
          <Path d="M50,10 L40,30 L50,10 L60,30 L50,10" stroke="#22b2e4" strokeWidth="5" fill="#22b2e4" />
      </Svg>
      {/* Bottom/Scroll Arrow */}
      <Svg width="100" height="100" style={{position:'absolute', width: "100%", bottom:100}} viewBox="0 0 100 100">
        <G transform="scale(1, -1) translate(0, -100)">
            {/* Arrow line */}
            {/* <Path d="M50,40 L50,10" stroke="#22b2e4" strokeWidth="5" fill="none" /> */}
            {/* Arrowhead */}
            <Path d="M50,10 L40,30 L50,10 L60,30 L50,10" stroke="#22b2e4" strokeWidth="5" fill="#22b2e4" />
        </G>
      </Svg>
      {/* Browse Arrow */}
      <Svg style={{position:'absolute', top:-25, right: 30}} width="100" height="100" viewBox="0 0 100 100">
        <G transform="scale(-1, 1) translate(-110, 0)">
          {/* Pronounced Curved Arrow line */}
          <Path d="M38,90 C35,70 35,30 50,10" stroke="#22b2e4" strokeWidth="5" fill="none" />
          {/* Arrow */}
          <G transform="rotate(30 50 10)">
              <Path d="M50,10 L40,30 L50,10 L60,30 L50,10" stroke="#22b2e4" strokeWidth="5" fill="#22b2e4" />
          </G>
        </G>
      </Svg>
      {/* User Arrow */}
      <Svg style={{position:'absolute', top:-25, right: -100}} width="100" height="400" viewBox="0 0 100 400">
        <G transform="scale(-1, 1) translate(-110, 0)">
          {/* Extended Curved Arrow line */}
          {/* <Path d="M50,360 C25,260 25,140 58,15" stroke="#22b2e4" strokeWidth="5" fill="none" /> */}
          <Path d="M80,360 C35,260 35,140 58,15" stroke="#22b2e4" strokeWidth="5" fill="none" />

          {/* Rotated Arrowhead */}
          <G transform="rotate(20 50 40)">
            <Path d="M50,10 L40,30 L50,10 L60,30 L50,10" stroke="#22b2e4" strokeWidth="5" fill="#22b2e4" />
          </G>
        </G>
      </Svg>

    </View>

    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',borderColor: 'rgba(0, 0, 0, 0.15)', borderWidth: 1, flexDirection: "column", width:"100%"}}>
      <Text style={{fontWeight:800, color: "#0c4a73" }}>Contact Form</Text>
      <Text>xyz</Text>
      <Text style={{fontWeight:800, color: "#0c4a73" }}>Pricing</Text>
      <Text>Clear, transparent pricing</Text>
      <Text>No mandatory demo or sales pressure, just sign up and use it</Text>
      <Text>(But sign up for a demo here if you want one [link])</Text>
      <Text>Dedicated Account Manager who will never abandon you or charge for their time</Text>
      <Text>24/7 Support</Text>
      <Text>Consulting packages available for bespoke requests</Text>
      <Text style={{fontWeight:800, color: "#0c4a73" }}>Overview</Text>
      <Text>Business Management</Text>
      <Text>Projects & Service Tickets</Text>
      <Text>Accounting & Finance</Text>
      <Text>Procurement and stock management</Text>
      <Text>Invoice your agreements and sales to your customers</Text>
      <Text>Employee management and productivity</Text>
      <Text style={{fontWeight:800, color: "#0c4a73" }}>Benefits</Text>
      <Text>Integrated Services (outsource your work to on-demand technical experts)</Text>
      <Text>MSP Community (peer/expert discussions and groups)</Text>
      <Text style={{fontWeight:800, color: "#0c4a73" }}>Features</Text>
      <Text>xyz</Text>
      <Text style={{fontWeight:800, color: "#0c4a73" }}>Integrations</Text>
      <Text>Productivity</Text>
      <Text>- Microsoft</Text>
      <Text>- Google Workspace / Gsuite</Text>
      <Text>- Zapier</Text>
      <Text>Remote Monitoring Systems</Text>
      <Text>- ConnectWise Automate (LabTech)</Text>
      <Text>- Datto RMM (Kaseya)</Text>
      <Text>- SolarWinds N-Central</Text>
      <Text>Vendors</Text>
      <Text>- Pax8</Text>
      <Text>- Datto Commerce</Text>
      <Text>- Ingram Micro</Text>
      <Text>- Dicker Data</Text>
      <Text>- Tech Data</Text>
      <Text>- Rhipe</Text>
      <Text>- Synnex</Text>
      <Text>Finance</Text>
      <Text>- Xero</Text>
      <Text>- QuickBooks</Text>
      <Text>- Myob</Text>
      <Text>- WaveApps</Text>
      <Text>- Dicker Data</Text>
      <Text>- Tech Data</Text>
      <Text>- Rhipe</Text>
      <Text>- Synnex</Text>
      <Text>Import / Export</Text>
      <Text>- CSV</Text>
      <Text>- Xlsx</Text>
      <Text>- xml / RSS</Text>
      <Text>- Postgres/SQLite.</Text>
      <Text style={{fontWeight:800, color: "#0c4a73" }}>Contact Form</Text>
      <Text>xyz</Text>
    </View> 
        
    <View style={{position: "absolute", padding: 10 ,backgroundColor: "yellow", right: 0, bottom: 0}}>
        <Text>Testing area</Text>
        <DocumentPicker setPickedDocument={setPickedDocument} />
        {pickedDocument && (
          <View>
            {pickedDocument.map((document: any, index: number) => {
              return (
                <View key={index}>
                  <Text>Selected Document:</Text>
                  <Text>Name: {document.name}</Text>
                  <Text>Type: {document.mimeType}</Text>
                </View>
              );
            })}
          </View>
        )}
        <View style={{ marginTop: 10 }}>
          <Button
            title="Upload Document"
            onPress={() =>
              upload(pickedDocument[0]?.name, pickedDocument[0]?.uri)
            }
          />
        </View>
        <View>
          <Button title="Test Fetch Data" onPress={() => fetchData(token)} />
        </View>
      </View>

  </>);
}

