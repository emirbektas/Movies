import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

const ImageSlider = () => (
  <View style={styles.container}>
    <Image source={require("../assets/slide1.jpg")} style={styles.image} />
    <View style={styles.textcontainer}>
      <Text style={styles.movietitle}>Drive</Text>
      <Pressable style={styles.imdbBtn}>
        <Text style={styles.movieimdb}>IMBD: 8.6</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "blue",
    // position: "relative",
  },
  image: {
    width: 415,
    height: 460,
    resizeMode: "cover",
    opacity: 0.8,
  },
  textcontainer: {
    position: "absolute",
    left: 20,
    bottom: 20,
  },
  movietitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
  },
  movieimdb: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  imdbBtn: {
    paddingVertical: 8,
    backgroundColor: "yellow",
    borderRadius: 6,
  },
});

export default ImageSlider;
