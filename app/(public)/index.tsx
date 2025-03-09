import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useLogin } from "@/hooks/useLogin";

export default function LoginScreen() {
  const router = useRouter();
  const loginMutation = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);

    try {
      await loginMutation.mutateAsync({ username, password });
      router.replace("/(private)/(tabs)");
    } catch (err) {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <View className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <Text className="text-2xl font-bold text-center text-gray-800 mb-4">
          Connexion
        </Text>

        {error && (
          <Text className="text-red-500 text-center mb-3">{error}</Text>
        )}

        <TextInput
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
          className="border border-gray-300 rounded-lg px-4 py-3 mb-3 text-gray-800"
        />

        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-gray-800"
        />

        <Pressable
          onPress={handleLogin}
          className="bg-blue-500 rounded-lg py-3 flex items-center"
        >
          <Text className="text-white font-semibold text-lg">Se connecter</Text>
        </Pressable>
      </View>
    </View>
  );
}
