import { create, createStore, useStore } from "zustand";
import { StateStorage, persist  } from "zustand/middleware";
import { ViewContainerColumn } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonText } from "./button";
// import { UtilityMmkvDatabase } from "./mmkv";
import { UtilityLocalAsyncstorage } from './local'
import { UtilityPlatformMain } from "./platform";
let UtilityMmkvDatabase: any;

if (UtilityPlatformMain.OS === 'web') {
  UtilityMmkvDatabase = require("./mmkv").UtilityMmkvDatabase;
}
// STORAGE

// move into 'local'/'state'?
export type TypeZustandStorage = StateStorage;

export const UtilityZustandStorage: TypeZustandStorage = {
  setItem: (name, value) => {
    return UtilityPlatformMain.OS==='web' ? UtilityMmkvDatabase.set(name, value) : UtilityLocalAsyncstorage.setItem(name, value) ;
  },
  getItem: (name) => {
    // const value = UtilityMmkvDatabase.getString(name);
    return UtilityPlatformMain.OS==='web' ? UtilityMmkvDatabase.getString(name): UtilityLocalAsyncstorage.getItem(name) ;
    // return value ?? null;
  },
  removeItem: (name) => {
    return UtilityPlatformMain.OS==='web' ? UtilityMmkvDatabase.delete(name): UtilityLocalAsyncstorage.removeItem(name) ;
    // return UtilityMmkvDatabase.delete(name);
  },
};

export type TypeZustandStore = {
  value: any;
  update: (newValue: any) => void;
};

// STORE

export const useZustandStore = (key: string) => {
  return create<TypeZustandStore>((set) => ({
    value: UtilityZustandStorage.getItem(key) ?? null,
    update: (newValue) => {
      // UtilityZustandStorage.setItem(key, newValue.toString());
      UtilityZustandStorage.setItem(key, newValue);
      set({ value: newValue });
    },
  }));
}

// example usage:
// export const useBookmarkStorage = useZustandStore("bookmark")
// export const { value, update } = useBookmarkStorage((state) => ({
//   value: state.value,
//   update: state.update,
// }));
// or?:
// export const useBookmarkValue = () => useBookmarkStorage((state) => state.value);
// export const useBookmarkUpdate = () => useBookmarkStorage((state) => state.update);
// const value = useBookmarkValue();
// const update = useBookmarkUpdate();


// EXAMPLE

// Define a Zustand store using the create function (make this dynamic by passing in prop instead of 'count' being static.)
export const useZustandExample = create((set) => ({
  count: Number(UtilityZustandStorage.getItem("count")) || 0,
  increment: () => {
    const currentCount = Number(UtilityZustandStorage.getItem("count")) || 0;
    const newCount = currentCount + 1;
    UtilityZustandStorage.setItem("count", newCount.toString());
    set({ count: newCount });
  },
}));

export const ViewZustandExample = () => {
  const count = useZustandExample((state: any) => state.count);
  const increment = useZustandExample((state: any) => state.increment);
  return (
    <ViewContainerColumn>
      <ViewTypographyText>Count: {count}</ViewTypographyText>
      <ViewButtonText buttonText="Increment" onPress={increment} />
    </ViewContainerColumn>
  );
};
