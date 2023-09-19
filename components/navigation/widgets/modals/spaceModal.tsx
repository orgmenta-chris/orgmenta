import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Link } from "react-router-dom";
import { useSpaceArray, useSpaceActive } from "../../../../utils/space"

// @ts-ignore
const SpaceModal = (props) => {
  const space_array = useSpaceArray({}) // This will return all spaces that the user has access to
  const space_active = useSpaceActive({}) // Placeholder - need to add a useQuery cache query that holds the active space
  const { modalVisible, setModalVisible } = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.avatarContainer}>
              <View>
                <Text style={styles.avatarText}>C</Text>
              </View>
              <View>
                <Text style={styles.titleText}>{space_active?.data?.title}</Text>
              </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.spaceLinks}>
              <Link to={`/spaces/${'SPACEIDHERE'}/pods`}>SPACE</Link>
              <Link to={`/spaces/all/pods`}>ALL SPACES</Link>
              <Link to="">Files</Link>
              <Link to="">Settings</Link> 
              <Link to="">Subscription & Billing</Link>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.spaceLinks}>
              <Link to="">Payroll</Link>
              <Link to="">Projects</Link>
              <Link to="">Workflow</Link>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.spaceLinks}>
              <Pressable style={styles.organization}>
                <Text>#1 - Dat Other Company</Text>
              </Pressable>
              <Pressable style={styles.organization}>
                <Text>+ Add a new organization</Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>❌</Text>
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
  avatarContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  avatarText: {
    fontSize: 32,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "yellow",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  titleText: {
    fontSize: 20,
  },
  divider: {
    height: 0,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
  spaceLinks: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    marginBottom: 15,
  },
  organization: {
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

export default SpaceModal;
