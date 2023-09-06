import { Text, View, Pressable, StyleSheet } from "react-native";
import { useAuthSession } from "../../../utils/auth";
import { useState } from "react";
import UserModal from "./modals/userModal";

export default function UserWidget() {
  const auth = useAuthSession();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flexDirection: "row", gap: 10, padding: 0, margin: 0 }}>
      <Pressable
        style={styles.navButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.navButton}>
          User | {auth?.data?.session === null ? "Guest" : "logged in"}
        </Text>
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
    padding: 0,
    margin: 0,
  },
});
