export interface AuthResponse {
  success: boolean;
  token: string;
  message: string;
}

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  logout: () => void;
}
