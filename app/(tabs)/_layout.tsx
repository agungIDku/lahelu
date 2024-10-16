import { Tabs } from "expo-router";
import { Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Home, Users, Bell, PlusCircle } from "@/components/icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1a1a1a", borderTopColor: "#1a1a1a" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => <Users color={color} />,
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => <PlusCircle color={color} />,
        }}
      />
      <Tabs.Screen
        name="notif"
        options={{
          title: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => <Bell color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/pp-not-found.jpg")}
              style={{ width: 24, height: 24, borderRadius: 24 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
