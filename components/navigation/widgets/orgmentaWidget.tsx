import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import OrgmentaModal from "./modals/orgmentaModal";
import { Link } from "react-router-dom";
import { useModalVisibility } from "../../../utils/modal";

export default function OrgmentaWidget() {
  const [modalVisible, setModalVisible] = useState(false);
  const [widgetHover, setWidgetHover] = useState(false);

  return (
    <View style={{flex:1}}>

      <Pressable
        style={styles.navButton}
        // onPress={() => {
        //   setWidgetHover(false)
        //   setModalVisible(true);
        // }}
        
        onPress={useModalVisibility('orgmenta')} 

        onHoverIn={()=>!modalVisible && setWidgetHover(true)}
        onHoverOut={()=>setWidgetHover(false)}
      >
        <Image
          style={{
            // overflow:'',
            width: widgetHover ? 150 : 50,
            height: 50,
            // top:-5
          }}
          source={{
            uri: widgetHover ? require('../../../assets/logo/full/white.png') : require('../../../assets/logo/symbol/white.png'),
          }}
        />
      </Pressable>
      
      {/* orgmenta modal */}
      <OrgmentaModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* orgmenta modal */}

    </View>
  );
}

const styles = StyleSheet.create({
  navButton: {
    flexGrow:1,
    flexDirection:'row',
    justifyContent:'center',
  },
});
