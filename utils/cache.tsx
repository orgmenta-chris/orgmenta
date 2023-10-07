// Cache: One of the four locations of Storage (Cache, State/Memory, Local, Remote/Cloud)
// The only cache currently supported is AsyncStorage.
// Possibly to implement mkkv too, if useful in the future.
// To do: Utilise encryption.tsx once developed.

import AsyncStorage from "@react-native-async-storage/async-storage"; // move this into own file

export const UtilityCacheAsyncstorage = AsyncStorage; // The entire utility object with all methods avaialable

export const setCacheAsyncstorage = AsyncStorage.setItem; // Sets the value for key.

export const setsCacheAsyncstorage = AsyncStorage.multiGet; // Batch-set operation, fetching multiple keys' values

export const getCacheAsyncstorage = AsyncStorage.getItem; // Retrieves the value for key.

export const getsCacheAsyncstorage = AsyncStorage.multiGet; // Batch-get operation, setting multiple keys' values

export const removeCacheAsyncstorage = AsyncStorage.removeItem; // Removes the key-value.

export const removesCacheAsyncstorage = AsyncStorage.multiRemove; // Batch-remove operation, removing multiple keys

export const mergeCacheAsyncstorage = AsyncStorage.mergeItem; // Merges existing value with input value, assuming both are stringified JSON.

export const mergesCacheAsyncstorage = AsyncStorage.multiMerge; // Batch-remove operation, removing multiple keys

export const clearCacheAsyncstorage = AsyncStorage.clear; // Clears all keys.

export const allCacheAsyncstorage = AsyncStorage.setItem; // Fetches all keys known to the app.

export const flushCacheAsyncstorage = AsyncStorage.setItem; // Flushes any pending requests using a single batch call to get the data.
