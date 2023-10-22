import { UtilityPlatformMain } from "./platform";
import {
  MMKV,
  useMMKV,
  useMMKVString,
  useMMKVNumber,
  useMMKVBoolean,
  useMMKVBuffer,
  useMMKVObject,
  useMMKVListener,
  MMKVConfiguration,
  NativeMMKV,
} from "react-native-mmkv";

// CONFIG

export type TypeMmkvConfig = MMKVConfiguration;

export const mapMmkvConfig: TypeMmkvConfig = {
  // Todo: pass the config in, rather than it being static.
  id: "my-storage-id",
  encryptionKey: "my-secret-key",
  path: "custom-path", // optional
};

// DATABASE

export type TypeMmkvDatabase = NativeMMKV;

// This is for redux but might be useful: https://viniciuspetrachin.medium.com/integrating-mmkv-with-redux-toolkit-for-persistent-data-4b3910033d9a#:~:text=MMKV%20Storage%20Benchmark%20in%20React,Step%201
export const UtilityMmkvDatabase: TypeMmkvDatabase = new MMKV(
  UtilityPlatformMain.OS !== "web"
    // If not web, then use config setup
    ? mapMmkvConfig
    // If web, config is not supported and will use localstorage.
    : void 0
);
