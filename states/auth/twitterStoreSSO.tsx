import { create } from "zustand";

export const useTwitterSSOStore = create((set) => ({
  userSession: {},
  setSession: (session: {}) => set({ userSession: session }),
  removeSession: () => set({ userSession: {} }),
}));
