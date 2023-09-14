import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Header</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
