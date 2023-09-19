import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Body from "../layout/Body";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <Body />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
