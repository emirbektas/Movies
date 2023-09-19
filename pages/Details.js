import React from "react";
import { Text, SafeAreaView } from "react-native";

export default function DetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <SafeAreaView>
      <Text style={{ color: "white" }}>Title: {movie.title}</Text>
      <Text style={{ color: "white" }}>Overview: {movie.overview}</Text>
    </SafeAreaView>
  );
}
