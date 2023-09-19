import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white", fontSize: 24 }}>Help</Text>
        <Text style={{ color: "white", marginTop: 10 }}>
          Frequently Asked Questions
        </Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: "white", fontSize: 24 }}>Legal</Text>
        <Text style={{ color: "white", marginTop: 10 }}>Copyrigth</Text>
        <Text style={{ color: "white", marginTop: 5 }}>Privacy Policy</Text>
        <Text style={{ color: "white", marginTop: 5 }}>Terms of Use</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          SOCIALS
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            gap: 25,
          }}
        >
          <FontAwesome5 name="facebook" size={48} color="white" />
          <Entypo name="instagram-with-circle" size={48} color="white" />
          <Entypo name="youtube-with-circle" size={48} color="white" />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.downloadContainer}>
        <Text style={{ color: "white", marginTop: 10 }}>
          all rights reserved
        </Text>
        <Image
          source={require("../assets/app-store.webp")}
          style={styles.downloadLink}
        />
        <Image
          source={require("../assets/google-play.webp")}
          style={styles.downloadLink}
        />
        <Image source={require("../assets/qr.png")} style={styles.qr} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: "#142036",
  },
  downloadContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  qr: {
    width: 150,
    height: 150,
  },
});
