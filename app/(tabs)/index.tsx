import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";

const { width, height } = Dimensions.get("window");

const profiles = [
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
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">

      <View className="w-full h-3/4 mt-5">
        <Swiper
          ref={swiperRef}
          cards={profiles}
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

      <View className="flex-row gap-5 mt-5">
        <TouchableOpacity
          className="bg-red-500 p-4 rounded-full"
          onPress={() => swiperRef.current?.swipeLeft()}
        >
          <Text className="text-white font-bold">❌</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 p-4 rounded-full"
          onPress={() => swiperRef.current?.swipeRight()}
        >
          <Text className="text-white font-bold">💚</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
