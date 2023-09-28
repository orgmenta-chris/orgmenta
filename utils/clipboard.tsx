import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import * as Clipboard from "expo-clipboard";

export const ClipboardCopy = ({}: any) => {
  const [copiedText, setCopiedText] = useState("");
  const [sampleText, setSampleText] = useState(
    "This is sample text you can edit. Copy to clipboard"
  );

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(sampleText);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: "95%",
          textAlign: "center",
        }}
        onChangeText={setSampleText}
        value={sampleText}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Button title="Copy to clipboard" onPress={copyToClipboard} />
      <Text style={{marginVertical: 5}}></Text>
      <Button title="View copied text" onPress={fetchCopiedText} />

      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Change to your desired background color
  },
  copiedText: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
