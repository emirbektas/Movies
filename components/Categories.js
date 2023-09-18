import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

export default function Categories() {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Adventure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sci-Fi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Comedy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Drama</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Horror</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    // position: "absolute",
  },
  btn: {
    padding: 10,
    backgroundColor: "#142036",
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});
