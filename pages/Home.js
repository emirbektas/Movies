import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Body from "../layout/Body";

export default function Home() {
  return (
    <View>
      <Header />
      <Body />
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
