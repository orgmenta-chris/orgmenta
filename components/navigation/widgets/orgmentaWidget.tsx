import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";

import { Link } from "react-router-dom";

export default function OrgmentaWidget() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.navButton}>
      <Link
        to='./'
      >
        <Image
          style={{
            width: 50,
            height: 50,
            top:-10
          }}
          source={{
            uri: require('../../../assets/logo/symbol/white.png'),
          }}
        />
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  navButton: {
    flex:1,
    padding: 0,
    margin: 0,
    flexDirection:'row',
    justifyContent:'center'
  },
});
