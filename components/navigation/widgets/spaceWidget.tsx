import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
// import { spaceState } from "../../../states/navigation/spaceState";
import SpaceModal from "./modals/spaceModal";

export default function SpaceWidget() {
  const [modalVisible, setModalVisible] = useState(false);
  // const toggle: any = spaceState();
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
        <Text> space</Text>
      </Pressable>

      {/* space modal */}
      <SpaceModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* space modal */}
    </View>
  );
}
