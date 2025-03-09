import { create } from "zustand";
import { AuthState } from "../types/auth";

const useAuthStore = create<AuthState>((set) => ({
  token: "",
  isAuthenticated: false,

  setToken: (token: string) => set({ token, isAuthenticated: !!token }),

  logout: () => set({ token: "", isAuthenticated: false }),
}));

export default useAuthStore;
