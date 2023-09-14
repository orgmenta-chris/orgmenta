import { create } from "zustand";

export const useTokenStore = create((set) => ({
  token: "",
  setToken: (newToken: string) => set({ token: newToken }),
  removeToken: () => set({ token: "" }),
}));

export default useTokenStore;
