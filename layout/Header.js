import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.navbar}>
        <MaterialCommunityIcons name="movie-open" size={24} color="white" />
        <Text style={styles.text}>MOVIE</Text>
        <TouchableOpacity onPress={() => navigation.navigate("WatchList")}>
          <Entypo name="list" size={24} color="white" />
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
  },
});
