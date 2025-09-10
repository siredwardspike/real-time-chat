import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function BackButton() {
  return (
    <View>
      <Link href="/" asChild>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          {/* Back arrow */}
          <FontAwesome name="arrow-left" size={24} style={{ marginRight: 8 }} />
          {/* Profile picture */}
        </Pressable>
      </Link>{" "}
    </View>
  );
}
