import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useAuthSession, useAuthSignout } from "../../../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignIn from "../../../auth/signIn";
import SignUp from "../../../auth/signUp";
import React from "react";
import MSAL from "../../../auth/msal";

// @ts-ignore
const UserModal = (props) => {
  const { modalVisible, setModalVisible } = props;

  const auth = useAuthSession();

  const signout = useAuthSignout();

  const native = useNavigate();

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { tab: "Sign in", component: <SignIn /> },
    { tab: "Sign up", component: <SignUp /> },
  ];

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

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
            <Text style={{ marginHorizontal: 12, color: "green" }}>
              {auth?.data?.isSignedIn
                ? "Signed in as " + auth.data.currentUser
                : "Using guest account"}
            </Text>
            <View style={styles.divider}></View>
            {/* tab buttons */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 10,
                marginHorizontal: 12,
              }}
            >
              {auth?.data?.session === null
                ? tabs.map((content, index) => (
                    <Pressable
                      key={index}
                      style={{
                        padding: 10,
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderLeftWidth: 1,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderColor:
                          activeTab === index ? "black" : "transparent",
                        backgroundColor:
                          activeTab === index ? "lightblue" : "transparent",
                      }}
                      onPress={() => handleTabPress(index)}
                    >
                      <Text style={{ fontWeight: "bold" }}>{content.tab}</Text>
                    </Pressable>
                  ))
                : null}
            </View>
            {/* tab buttons */}

            {/* tab content */}
            {auth?.data?.session === null ? (
              <View>{tabs[activeTab].component}</View>
            ) : (
              <View style={styles.userLinks}>
                <Pressable
                  style={styles.links}
                  onPress={() => {
                    setModalVisible(false);
                    native(`/user/${auth?.data?.session?.user?.id}`);
                  }}
                >
                  <Text
                    style={{
                      color: "blue",
                      textDecorationStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    View Profile
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.links}
                  onPress={() => {
                    setModalVisible(false);
                    native(`/user/settings/${auth?.data?.session?.user?.id}`);
                  }}
                >
                  <Text
                    style={{
                      color: "blue",
                      textDecorationStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    Settings
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.links}
                  onPress={() => {
                    setModalVisible(false);
                    signout.mutate();
                  }}
                >
                  <Text
                    style={{
                      color: "blue",
                      textDecorationStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    Log out
                  </Text>
                </Pressable>
                <MSAL />
              </View>
            )}
            {/* tab content */}

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
  userLinks: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    marginBottom: 15,
    marginHorizontal: 12,
  },
  divider: {
    height: 0,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 12,
  },
  links: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default UserModal;
