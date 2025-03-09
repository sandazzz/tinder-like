import { View, Text, Image, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";

const fetchProfile = async () => {
  const response = await fetch("https://api-tinder-next.vercel.app/api/me");
  if (!response.ok) {
    throw new Error("Erreur lors du chargement du profil");
  }
  return response.json();
};

export default function ProfileScreen() {
  const router = useRouter();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#FF5864" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-6">
        <Text className="text-red-500 text-lg">Une erreur est survenue 😞</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Image
        source={{ uri: user.image }}
        className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg"
      />
      <Text className="text-3xl font-bold mt-4 text-gray-800">
        {user.name}, {user.age}
      </Text>

      <Text className="text-lg text-gray-600 text-center mt-2 px-6">
        {user.bio}
      </Text>
    </View>
  );
}
