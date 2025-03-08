import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const user = {
  name: "John Doe",
  age: 25,
  bio: "Voyageur, passionné de tech et fan de café ☕",
  image: "https://randomuser.me/api/portraits/men/45.jpg",
};

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      {/* Photo de profil */}
      <Image
        source={{ uri: user.image }}
        className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg"
      />

      {/* Nom et âge */}
      <Text className="text-3xl font-bold mt-4 text-gray-800">
        {user.name}, {user.age}
      </Text>

      {/* Bio */}
      <Text className="text-lg text-gray-600 text-center mt-2 px-6">
        {user.bio}
      </Text>

      {/* Bouton Modifier */}
     
    </View>
  );
}
