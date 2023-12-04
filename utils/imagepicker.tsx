import * as ImagePicker from "expo-image-picker";

export const pickImageAsync = async (obj: any) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    // setSelectedImage(result.assets[0].uri);
    obj.insertImage(result.assets[0].uri);
  } else {
    alert("You did not select any image.");
  }
};