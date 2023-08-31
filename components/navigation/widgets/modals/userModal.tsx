import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

// @ts-ignore
const UserModal = (props) => {
  const { modalVisible, setModalVisible } = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={{ paddingHorizontal: 10 }}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. johndoe@email.com"
              />
              <Text style={{ paddingHorizontal: 10 }}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
              />
            </View>
            <View style={styles.divider}></View>
            <View style={styles.userLinks}>
              <Pressable style={styles.links}>
                <Text>View profile</Text>
              </Pressable>
              <Pressable style={styles.links}>
                <Text>Account analytics</Text>
              </Pressable>
              <Pressable style={styles.links}>
                <Text>Settings</Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 500,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 48,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  divider: {
    height: 0,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
  userLinks: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    marginBottom: 15,
  },
  links: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default UserModal;
