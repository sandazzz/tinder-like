import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import useAuthStore from "@/stores/useAuthStore";
import { AuthResponse } from "../types/auth";

interface LoginParams {
  username: string;
  password: string;
}

const loginRequest = async ({
  username,
  password,
}: LoginParams): Promise<AuthResponse> => {
  const response = await fetch(
    "https://api-tinder-next.vercel.app/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Échec de l'authentification");
  }

  return response.json();
};

export const useLogin = () => {
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation<AuthResponse, Error, LoginParams>({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      if (data.success && data.token) {
        setToken(data.token);
        router.push("/(private)/(tabs)");
      }
    },
    onError: (error) => {
      console.error("Erreur de connexion:", error.message);
    },
  });
};
