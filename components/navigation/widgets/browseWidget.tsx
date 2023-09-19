import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import BrowserModal from "./modals/browserModal";
import { ViewIconMain } from "../../../utils/icon";

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
        <Text selectable={false} numberOfLines={1} style={{minWidth:"100%",textAlign:'right', paddingRight: 10, color:'white'}}>{`Browse`}</Text>
        <ViewIconMain
          name={'book-open'}
          source={'Feather'}
          color={'white'}
        />
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
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
});
