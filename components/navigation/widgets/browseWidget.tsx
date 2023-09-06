import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import BrowserModal from "./modals/browserModal";

export default function BrowseWidget() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.navButton}>
      <Pressable
        style={styles.navButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.navButton}>Browse</Text>
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

const styles = StyleSheet.create({
  navButton: {
    padding: 0,
    margin: 0,
  },
});
