import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

export default function Categories() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button title="Action" />
        <Button title="Action" />
        <Button title="Action" />
        <Button title="Action" />
        <Button title="Action" />
        <Button title="Action" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 4,
    borderRadius: "10",
  },
});
