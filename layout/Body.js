import React from "react";
import { StyleSheet, View } from "react-native";
import MovieList from "../components/MovieList";
import Carousel from "../components/Carousel";

const Body = () => (
  <View style={{ flex: 1 }}>
    <Carousel />
    <MovieList />
  </View>
);

const styles = StyleSheet.create({});

export default Body;
