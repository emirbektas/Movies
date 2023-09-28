import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CountryFlag from "react-native-country-flag";
import i18next from "../services/i18next";

export default function Header() {
  const [currentLang, setCurrentLang] = useState("gb");

  const navigation = useNavigation();

  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setCurrentLang(currentLang === "gb" ? "tr" : "gb");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.navbar}>
        <Pressable onPress={() => changeLng(currentLang)}>
          <CountryFlag isoCode={currentLang} size={24} />
        </Pressable>
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
