import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import { X, Check } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

interface Profile {
  name: string;
  age: number;
  bio: string;
  image: string;
}

const profiles: Profile[] = [
  {
    name: "Alice",
    age: 24,
    bio: "Fan de React et de voyages",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Bob",
    age: 27,
    bio: "Développeur mobile et amateur de café",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef<Swiper<Profile> | null>(null);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <View className="w-full h-3/4 mt-5">
        <Swiper
          ref={swiperRef}
          cards={profiles}
          onSwipedLeft={() => {
            console.log("Profil rejeté");
          }}
          onSwipedRight={() => {
            console.log("Profil liké");
          }}
          renderCard={(profile) => (
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
          )}
          onSwiped={(cardIndex) => setIndex(cardIndex + 1)}
          cardIndex={index}
          stackSize={3}
          backgroundColor="transparent"
        />
      </View>

      <View className="flex-row gap-6 mt-5">
        <TouchableOpacity
          className="bg-white rounded-full shadow-xl flex items-center justify-center w-16 h-16 border border-gray-300 "
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
