import { create } from "zustand";

export const useAzureSSOStore = create((set) => ({
  userSession: {},
  setSession: (session: {}) => set({ userSession: session }),
  removeSession: () => set({ userSession: {} }),
}));
