import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import BookmarkModal from "./modals/bookmarkModal";
import { ViewIconMain } from "../../../utils/icon";
import { useModalVisibility } from "../../../utils/modal";

export default function BookmarkWidget() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.navButton}>
      <Pressable
        style={styles.navButton}
        // onPress={() => {
        //   setModalVisible(true);
        // }}
        onPress={useModalVisibility('bookmark')}
      >
        <ViewIconMain
          name={'bookmark'}
          source={'Feather'}
          color={'white'}
        />
        <Text selectable={false} numberOfLines={1} style={{minWidth:"100%", paddingLeft: 10, color:'white'}}>{`Bookmarks`}</Text>
      </Pressable>

      {/* browser modal */}
      <BookmarkModal
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
