// Local: One of the four locations of Storage (Cache, State/Memory, Local, Edge, Remote/Cloud)
// The local dbs currently supported are  AsyncStorage and Expo Securestore.
// Possibly to implement mkkv too, if useful in the future.
// To do: Utilise encryption.tsx once developed.

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Securestore from "expo-secure-store";
import { SecureStoreOptions } from "expo-secure-store";

// ASYNCSTORAGE

export const UtilityLocalAsyncstorage = AsyncStorage; // The entire utility object with all methods avaialable

export const setLocalAsyncstorage = AsyncStorage.setItem; // Sets the value for key.

export const setsLocalAsyncstorage = AsyncStorage.multiGet; // Batch-set operation, fetching multiple keys' values

export const getLocalAsyncstorage = AsyncStorage.getItem; // Retrieves the value for key.

export const getsLocalAsyncstorage = AsyncStorage.multiGet; // Batch-get operation, setting multiple keys' values

export const removeLocalAsyncstorage = AsyncStorage.removeItem; // Removes the key-value.

export const removesLocalAsyncstorage = AsyncStorage.multiRemove; // Batch-remove operation, removing multiple keys

export const mergeLocalAsyncstorage = AsyncStorage.mergeItem; // Merges existing value with input value, assuming both are stringified JSON.

export const mergesLocalAsyncstorage = AsyncStorage.multiMerge; // Batch-remove operation, removing multiple keys

export const clearLocalAsyncstorage = AsyncStorage.clear; // Clears all keys.

export const allLocalAsyncstorage = AsyncStorage.setItem; // Fetches all keys known to the app.

export const flushLocalAsyncstorage = AsyncStorage.setItem; // Flushes any pending requests using a single batch call to get the data.

// SECURESTORE

export const UtilityLocalSecurestore = Securestore; // The entire utility object with all methods avaialable

export type TypeLocalSecurestore = SecureStoreOptions; // The entire utility object with all methods avaialable

export const removeLocalSecurestore = Securestore.deleteItemAsync; // Delete the key-value associated with the provided key

export const getLocalSecurestore = Securestore.getItemAsync; // Reads the stored value associated with the provided key

export const setLocalSecurestore = Securestore.setItemAsync; // Stores a key–value pair

// Securestore Constants
export const AFTER_FIRST_UNLOCK = Securestore.AFTER_FIRST_UNLOCK;
export const AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY = Securestore.AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY;
export const ALWAYS = Securestore.ALWAYS;
export const ALWAYS_THIS_DEVICE_ONLY = Securestore.ALWAYS_THIS_DEVICE_ONLY;
export const WHEN_UNLOCKED = Securestore.WHEN_UNLOCKED;
export const WHEN_UNLOCKED_THIS_DEVICE_ONLY = Securestore.WHEN_UNLOCKED_THIS_DEVICE_ONLY;
export const WHEN_PASSCODE_SET_THIS_DEVICE_ONLY = Securestore.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY;

