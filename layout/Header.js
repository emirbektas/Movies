import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.navbar}>
          <Octicons name="three-bars" size={24} color="black" />
          <Text style={styles.text}>MOVIE</Text>
          <Text style={{ fontSize: 24 }}>Sağ</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "500",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
    padding: 10,
    zIndex: 1,
  },
});
