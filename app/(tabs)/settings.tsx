import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ScrollView } from "react-native";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoDownloadMedia, setAutoDownloadMedia] = useState(true);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
      <View style={styles.settingRow}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={setDarkModeEnabled} />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Auto-Download Media</Text>
        <Switch
          value={autoDownloadMedia}
          onValueChange={setAutoDownloadMedia}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Privacy & Security</Text>
        <Text style={styles.value}>Tap to configure</Text>
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Help & Support</Text>
        <Text style={styles.value}>Tap to view</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: { fontSize: 16 },
  value: { color: "gray" },
});
