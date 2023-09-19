import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import SpaceModal from "./modals/spaceModal";
import { ViewIconMain } from "../../../utils/icon";

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
        <ViewIconMain
          name={'box'}
          source={'Feather'}
          color={'white'}
        />
        <Text selectable={false} numberOfLines={1} style={{minWidth:"100%", paddingLeft: 10, color:'white'}}>{`SpaceName`}</Text>
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
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
});
