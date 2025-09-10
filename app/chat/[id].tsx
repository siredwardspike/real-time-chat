import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

type Message = { id: string; text: string; sender: "me" | "other" };

export default function ChatScreen() {
  const { id, name } = useLocalSearchParams<{ id: string; name?: string }>();

  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hey! How are you?", sender: "other" },
    { id: "2", text: "I’m good, working on my project.", sender: "me" },
    { id: "3", text: "Nice! Can’t wait to see it 🚀", sender: "other" },
  ]);

  const [input, setInput] = useState("");
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: input, sender: "me" },
    ]);
    setInput("");
  };

  useEffect(() => {
    if (flatListRef.current)
      flatListRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f2f2f2" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              item.sender === "me" ? styles.myBubble : styles.otherBubble,
            ]}
          >
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 10 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bubble: { maxWidth: "75%", padding: 10, borderRadius: 15, marginVertical: 5 },
  myBubble: { alignSelf: "flex-end", backgroundColor: "#DCF8C6" },
  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#25D366",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
});
