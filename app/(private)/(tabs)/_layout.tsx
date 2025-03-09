import { useState, useEffect } from "react";
import { Tabs, useRouter } from "expo-router";
import { Heart, MessageSquare, ThumbsUp, User } from "lucide-react-native";
import useAuthStore from "@/stores/useAuthStore";

export default function TabLayout() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isAuthenticated) {
      router.replace("/(public)");
    }
  }, [isMounted, isAuthenticated]);

  if (!isMounted) return null;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: 60,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
          letterSpacing: 0.5,
        },
        tabBarActiveTintColor: "#FF5864",
        tabBarInactiveTintColor: "#888",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Swipe",
          tabBarIcon: ({ color }) => <Heart size={20} color={color} />, // Icône plus fine
        }}
      />

      <Tabs.Screen
        name="matches"
        options={{
          title: "Matchs",
          tabBarIcon: ({ color }) => <MessageSquare size={20} color={color} />, // Icône plus fine
        }}
      />

      <Tabs.Screen
        name="liked"
        options={{
          title: "Liked",
          tabBarIcon: ({ color }) => <ThumbsUp size={20} color={color} />, // Icône plus fine
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <User size={20} color={color} />, // Icône plus fine
        }}
      />
    </Tabs>
  );
}
