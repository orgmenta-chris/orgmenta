


import { shareAsync, SharingOptions, isAvailableAsync } from "expo-sharing";

export const asyncShareOpen = shareAsync;

export type TypeShareOptions = SharingOptions;

export const asyncShareAvailable = isAvailableAsync; // returns boolean