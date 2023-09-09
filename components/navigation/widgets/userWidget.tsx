import { Text, View, Pressable, StyleSheet } from "react-native";
import { useAuthSession } from "../../../utils/auth";
import { useState } from "react";
import UserModal from "./modals/userModal";
import { ViewIconMain } from "../../../utils/icon";

export default function UserWidget() {
  const auth = useAuthSession();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.navButton}>
      <Pressable
        style={styles.navButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text selectable={false} numberOfLines={1} style={{minWidth:"100%",textAlign:'right', paddingRight: 10}}>
          {`${auth?.data?.session === null ? "Guest" : "logged in"}`}
        </Text>
        <ViewIconMain
          name={'user'}
          source={'Feather'}
          color={'white'}
        />
      </Pressable>
      <UserModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navButton: {
    flex:1,
    padding: 0,
    margin: 0,
    flexDirection:'row',
  },
});
