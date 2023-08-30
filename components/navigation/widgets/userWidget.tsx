import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
// import { userState } from "../../../states/navigation/userState";
import UserModal from "./modals/userModal";

export default function UserWidget() {
  const [modalVisible, setModalVisible] = useState(false);
  // const toggle: any = userState();
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
        <Text> user</Text>
      </Pressable>

      {/* user modal */}
      <UserModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* user modal */}
    </View>
  );
}
