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
        <Text selectable={false} numberOfLines={1} style={{flexGrow:1,textAlign:'right', paddingRight: 10, color:'white'}}>
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
    flexDirection:'row',
    alignItems:'center',
  },
});
