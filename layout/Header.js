import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function Header() {
  const list = useSelector((state) => state.list.list);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.navbar}>
        <Text style={{ fontSize: 24, color: "white" }}>Sol</Text>
        <Text style={styles.text}>MOVIE</Text>
        <TouchableOpacity>
          <Entypo name="list" size={24} color="white" />

          {/* Yazdırma işlemi çalışıyor, dropdown ya da drawer ekle */}
          {/* {list.map((item) => (
            <View>
              <Text style={{ color: "white" }}>{item.title}</Text>
            </View>
          ))} */}
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
