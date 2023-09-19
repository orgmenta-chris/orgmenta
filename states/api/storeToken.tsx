import { create } from "zustand";

export const useTokenStore = create((set) => ({
  token: "",
  refreshToken: "",
  expireTime: "",
  setToken: (newToken: string) => set({ token: newToken }),
  removeToken: () => set({ token: "" }),
  setRefreshToken: (refreshToken: string) =>
    set({ refreshToken: refreshToken }),
  removeRefreshToken: () => set({ refreshToken: "" }),
  setExpireTime: (expireTime: number) => set({ expireTime: expireTime }),
  removeExpireTime: () => set({ expireTime: "" }),
}));

export default useTokenStore;
