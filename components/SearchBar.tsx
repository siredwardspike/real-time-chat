import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (text: string) => {
    setQuery(text);
    onSearch(text); // Call parent handler with the query
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={handleChange}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 8,
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
