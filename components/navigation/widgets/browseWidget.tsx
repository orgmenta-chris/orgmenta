import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
// import { browseState } from "../../../states/navigation/browseState";
import BrowserModal from "./modals/browserModal";

export default function BrowseWidget() {
  const [modalVisible, setModalVisible] = useState(false);
  // const toggle: any = browseState();
  return (
    <View>
      <Pressable
        // onPress={() => {
        //   toggle.update(!toggle.active);
        // }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text> browse</Text>
      </Pressable>

      {/* browser modal */}
      <BrowserModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* browser modal */}
    </View>
  );
}
