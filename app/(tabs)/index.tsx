import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import SearchBar from "@/components/SearchBar";

type Chat = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
};

const mockChats: Chat[] = [
  {
    id: "1",
    name: "Alice",
    lastMessage: "Hey, are we meeting later?",
    time: "12:30 PM",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Bob",
    lastMessage: "Sure thing 👍",
    time: "11:15 AM",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Charlie",
    lastMessage: "Can you send me the docs?",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function ChatsScreen() {
  const [filteredChats, setFilteredChats] = useState(mockChats);

  const handleSearch = (query: string) => {
    const results = mockChats.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredChats(results);
  };

  const renderItem = ({ item }: { item: Chat }) => (
    <Link
      href={{
        pathname: "/chat/[id]",
        params: { id: item.id, name: item.name, avatar: item.avatar },
      }}
      asChild
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        }}
      >
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ color: "gray" }} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
        <Text style={{ color: "gray", fontSize: 12 }}>{item.time}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SearchBar placeholder="Search chats..." onSearch={handleSearch} />
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
