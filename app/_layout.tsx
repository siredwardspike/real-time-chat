import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, Link } from "expo-router";
import { Pressable, Image } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import BackButton from "@/components/BackButton";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          headerShown: true,
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comments" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/settings"
        options={{
          headerShown: true,

          headerLeft: () => <BackButton></BackButton>,
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />

      <Tabs.Screen
        name="(tabs)/chat/[id]"
        options={({ route }) => {
          const params = route.params as
            | { id?: string; name?: string; avatar?: string }
            | undefined;
          const id = params?.id;
          const name = params?.name;
          const avatar = params?.avatar;

          return {
            tabBarStyle: { display: "none" },
            headerShown: true, //
            title: name ?? `Chat with ${id ?? "Unknown"}`,
            headerLeft: () => (
              <Link href="/" asChild>
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <FontAwesome
                    name="arrow-left"
                    size={24}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 8 }}
                  />
                  <Image
                    source={{ uri: avatar }}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 30,
                      borderWidth: 1,
                      borderColor: "#ddd",
                    }}
                  />
                </Pressable>
              </Link>
            ),
          };
        }}
      />
    </Tabs>
  );
}
