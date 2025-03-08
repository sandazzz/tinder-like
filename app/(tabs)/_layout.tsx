import { Tabs } from "expo-router";
import { Heart, MessageSquare, User } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: 60, // Légèrement réduit pour un look plus fin
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11, // Texte plus discret
          fontWeight: "500", // Police plus fine
          letterSpacing: 0.5, // Un petit espacement pour l'élégance
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
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <User size={20} color={color} />, // Icône plus fine
        }}
      />
    </Tabs>
  );
}
