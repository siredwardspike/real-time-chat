import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";

export default function SignInScreen() {
  // ✅ default export
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    Alert.alert("Success", `Signed in as ${email}`);
    router.replace("/(tabs)/index"); // navigate to home after sign in
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <Link href="/(auth)/signup" style={styles.link}>
          Sign Up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  footer: { flexDirection: "row", justifyContent: "center" },
  link: { color: "#007AFF", fontWeight: "bold" },
});
