import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ImageSlider from "../components/imageSlider";
import Categories from "../components/Categories";

const Body = () => (
  <View>
    <ImageSlider />
    <Categories />
  </View>
);

const styles = StyleSheet.create({});

export default Body;
