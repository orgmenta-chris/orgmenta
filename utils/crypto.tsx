// 'Crypto' is a Cryptography module.
// https://docs.expo.dev/versions/latest/sdk/crypto/
// Note: AES encryption not yet tested (waiting for msal android, for android emulator testing.)
// If crypto.js is not compatible (it should be) then we could use crypto-es instead (simple drop in replacement).
  // see https://stackoverflow.com/questions/60733815/how-to-encrypt-data-in-react-native-using-expo

import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import * as Crypto from "expo-crypto";
import CryptoJS from "crypto-js";

// Encrypt
export const doCryptoEncrypt = (text: string, secretKey: string): string => {
  const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString();
  return cipherText;
};

// Decrypt
export const doCryptoDecrypt = (cipherText: string, secretKey: string): string => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

// Hash
export const asyncCryptoHash = async (cipherText: string): Promise<string> => {
  const digest: string = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA512,
    cipherText,
    { encoding: Crypto.CryptoEncoding.HEX }
  );
  return digest;
};

export const ViewCryptoExample = () => {
  const [hash, setHash] = useState<string | null>(null);
  const [aes, setAes] = useState<string | null>(null);
  const secretKey = "YourSecretKeyHere";
  const textToEncrypt = "Sensitive Data";
  const handleHash = async () => {
    const hashed = await asyncCryptoHash("Sensitive Data");
    setHash(hashed);
  };
  const handleEncrypt = () => {
    const encrypted = doCryptoEncrypt(textToEncrypt, secretKey);
    setAes(encrypted);
  };
  const handleDecrypt = () => {
    if (aes) {
      const decrypted = doCryptoDecrypt(aes, secretKey);
      setAes(decrypted);
    }
  };
  return (
    <View style={{ height: 400, width: 400, backgroundColor: "red" }}>
      <Text>Crypto Module Example</Text>
      <Pressable style={{backgroundColor:'green', padding: 10}}onPress={handleHash}>
        <Text>Test Hash</Text>
      </Pressable>
      <Pressable style={{backgroundColor:'blue', padding: 10}} onPress={handleEncrypt}>
        <Text>Encrypt</Text>
      </Pressable>
      <Pressable style={{backgroundColor:'yellow', padding: 10}} onPress={handleDecrypt}>
        <Text>Decrypt</Text>
      </Pressable>
      <Text>AES: {aes}</Text>
      <Text>Hash: {hash}</Text>
      <Text>-- END --</Text>
    </View>
  );
};
