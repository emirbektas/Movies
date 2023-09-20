import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
      <View style={styles.navbar}>
        <Text style={{ fontSize: 24, color: "white" }}>Sol</Text>
        <Text style={styles.text}>MOVIE</Text>
        <TouchableOpacity>
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
  navbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    zIndex: 1,
  },
});
