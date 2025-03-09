import { View, Text, Image, ScrollView } from "react-native";
import useLikedProfilesStore from "@/stores/useLikedProfilesStore";

export default function LikedProfilesScreen() {
  const likedProfiles = useLikedProfilesStore((state) => state.likedProfiles);

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <Text className="text-2xl font-bold mb-4">Profils Likés ❤️</Text>
      <ScrollView>
        {likedProfiles.length > 0 ? (
          likedProfiles.map((profile, index) => (
            <View key={index} className="bg-white p-4 mb-4 rounded-xl shadow">
              <Image
                source={{ uri: profile.image }}
                className="w-full h-40 rounded-xl"
              />
              <Text className="text-xl font-bold mt-2">
                {profile.name}, {profile.age}
              </Text>
              <Text className="text-gray-500">{profile.bio}</Text>
            </View>
          ))
        ) : (
          <Text className="text-center text-gray-500">
            Aucun profil liké pour le moment.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
