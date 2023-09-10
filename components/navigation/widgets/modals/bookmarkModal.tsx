import React, {useState} from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  ScrollView
} from "react-native";
import { data } from "../../../../utils/static";
import { ViewIconMain } from "../../../../utils/icon";
import { Expandable } from '../../../expandable'

// @ts-ignore
const BookmarkModal = (props) => {
  const { modalVisible, setModalVisible } = props;
  const [ modalPinned, setModalPinned ] = useState(false);
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      {!modalPinned && <Pressable style={styles.backdrop} onPress={()=>setModalVisible(false)}></Pressable>}
      <View style={styles.modalView}>
        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <ViewIconMain name={'caretup'} source={'AntDesign'} color='black'/>
          </Pressable>
          {/* <Pressable
            style={styles.button}
            onPress={() => setModalPinned(!modalPinned)}
          >
            <ViewIconMain name={'pin'} source={'MaterialCommunityIcons'} color='black'/>
          </Pressable> */}
        </View>
        <ScrollView style={{height:'80%'}}
        >
          {
            data // temporary array that contains all the navigation objects
              .filter(
                (x) => (x.status === "3. Active" || __DEV__) && x.parent === 1
              ) // if in production, only show active modules
              .map((x, i) => (
                <Expandable item={x} key={i} />
              )) // display the name only (temporary, to be replaced with link)
          }
        </ScrollView>
        <View style={{height:60}}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop:{
    backgroundColor: 'rgba(0,0,0,0.2)', 
    width: "100%",
    height: "100%",
  },
  modalView: {
    marginTop: 60,
    position:'absolute',
    top:0,
    left:0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // maxWidth: 400,
    minWidth: "12.5%",
    height:"100%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    left:0,
    fontSize: 48,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default BookmarkModal;
