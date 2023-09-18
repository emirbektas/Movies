import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ImageSlider from "../components/ImageSlider";
import Categories from "../components/Categories";
import MovieList from "../components/MovieList";

const Body = () => (
  <View>
    <ImageSlider />
    <Categories />
    <MovieList />
  </View>
);

const styles = StyleSheet.create({});

export default Body;
