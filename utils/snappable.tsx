import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, PanResponder, Dimensions } from 'react-native';

const CELL_SIZE = Dimensions.get('window').width / 3;

const Draggable = ({ visible, onClose, lockWindow=true, children, grid='none'}:any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleDrag = (dx:any, dy:any) => {
    let newX = position.x + dx;
    let newY = position.y + dy;

    if (lockWindow) {
      const windowWidth = 1000;//todo
      const windowHeight = 400; // Replace this with the actual height of the Draggable component
      const maxPosX = windowWidth - 400; // The width of the Draggable component is 400
      const maxPosY = lockWindow.height - windowHeight;

      // Limit the X coordinate within the parent component
      if (newX < 0) {
        newX = 0;
      } else if (newX > maxPosX) {
        newX = maxPosX;
      }

      // Limit the Y coordinate within the parent component
      if (newY < 0) {
        newY = 0;
      } else if (newY > maxPosY) {
        newY = maxPosY;
      }
    }

    // Snap to grid
    if (grid === '3x3') {
      newX = Math.round(newX / CELL_SIZE) * CELL_SIZE;
      newY = Math.round(newY / CELL_SIZE) * CELL_SIZE;
    }

    setPosition({ x: newX, y: newY });
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setDragging(true);
    },
    onPanResponderMove: (_, { dx, dy }) => {
      handleDrag(dx, dy);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      setDragging(false);
      // Check if the modal has been dragged outside of the parent container
      if (position.x + dx < 0 || position.y + dy < 0) {
        setPosition({ x: 0, y: 0 });
      }
    },
  });

  return (
    <View style={{width:1000,height:1000}}>
      <View style={[styles.modalContainer, { top: position.y, left: position.x }]} {...panResponder.panHandlers}>
        <View style={styles.modalHeader}>
          <Text selectable={false} style={styles.modalHeaderText}>Drag me</Text>
          <TouchableOpacity onPress={onClose}>
            <Text selectable={false} style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalContent}>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
modalContainer: {
position: 'absolute',
width: 400,
height: 400,
backgroundColor: 'yellow',
borderRadius: 8,
padding: 16,
},
modalHeader: {
backgroundColor: 'lightgreen',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingBottom: 8,
marginBottom: 8,
height: 50,
},
modalHeaderText: {
fontWeight: 'bold',
fontSize: 16,
},
modalCloseText: {
color: 'white',
backgroundColor: 'blue',
height: 50,
width: 50,
},
modalContent: {
backgroundColor: 'red',
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
});

export default Draggable;
