import { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { X, Check } from "lucide-react-native";
import { useQuery } from "@tanstack/react-query";
import useLikedProfilesStore from "@/stores/useLikedProfilesStore";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      const res = await fetch(
        "https://api-tinder-next.vercel.app/api/profiles"
      );
      console.log("Response Status:", res.status);
      console.log("Response Headers:", res.headers.get("content-type"));

      if (!res.ok) {
        throw new Error(`Erreur API: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();
      return json;
    },
  });

  const swiperRef = useRef<Swiper<any> | null>(null);
  const likeProfile = useLikedProfilesStore((state) => state.likeProfile);

  const profilesData = Array.isArray(data) ? data : [data];

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="text-lg font-bold mt-2">
          Chargement des profils...
        </Text>
      </View>
    );
  }

  if (error || profilesData.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-red-500">
          Erreur ou aucun profil disponible.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <View className="w-full h-3/4 mt-5">
        <Swiper
          ref={swiperRef}
          cards={profilesData}
          onSwipedLeft={() => console.log("Profil rejeté")}
          onSwipedRight={(cardIndex) => {
            if (profilesData[cardIndex]) {
              likeProfile(profilesData[cardIndex]);
              console.log("Profil liké :", profilesData[cardIndex]);
            }
          }}
          renderCard={(profile) =>
            profile ? (
              <View
                className="bg-white rounded-2xl shadow-lg p-5"
                style={{ width: width * 0.9, height: height * 0.7 }}
              >
                <Image
                  source={{ uri: profile.image }}
                  style={{ width: "100%", height: "80%", borderRadius: 20 }}
                />
                <Text className="text-xl font-bold mt-3">
                  {profile.name}, {profile.age}
                </Text>
                <Text className="text-gray-500 mt-1">{profile.bio}</Text>
              </View>
            ) : null
          }
          onSwiped={(cardIndex) => {
            console.log("Carte swipée :", cardIndex);
          }}
          stackSize={3}
          backgroundColor="transparent"
        />
      </View>

      <View className="flex-row gap-6 mt-5">
        <TouchableOpacity
          className="bg-white rounded-full shadow-xl flex items-center justify-center w-16 h-16 border border-gray-300"
          onPress={() => swiperRef.current?.swipeLeft()}
        >
          <X size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white rounded-full shadow-xl flex items-center justify-center w-16 h-16 border border-gray-300"
          onPress={() => swiperRef.current?.swipeRight()}
        >
          <Check size={32} color="rgba(52, 199, 89, 0.8)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
