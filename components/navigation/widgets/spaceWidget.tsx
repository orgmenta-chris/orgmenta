import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import SpaceModal from "./modals/spaceModal";

export default function SpaceWidget() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.navButton}>
      <Pressable
        style={styles.navButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.navButton}>Space</Text>
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

const styles = StyleSheet.create({
  navButton: {
    padding: 0,
    margin: 0,
  },
});
