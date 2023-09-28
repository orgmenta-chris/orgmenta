import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Crypto from 'expo-crypto';

export default function App() {
  useEffect(() => {
    (async () => {
      const digest: string = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA512,
        'Sensitive Data',
        { encoding: Crypto.CryptoEncoding.HEX }
      );
      console.log('Digest:', digest);
      // Additional operations
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Crypto Module Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { /* styles */ }
});


// Usage guidelines

// Asynchronous Operations
// Use digestStringAsync and getRandomBytesAsync instead of their synchronous counterparts. Asynchronous functions are non-blocking and won't affect the performance of your React Native application.
// Strong Randomness
// For generating cryptographically secure random bytes, use Crypto.getRandomBytesAsync() method. Do not fall back to Math.random() for cryptographic purposes.
// TypeScript and React Native Web
// You can directly import types to ensure type safety, e.g., CryptoDigestAlgorithm for the algorithm type.