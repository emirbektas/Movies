import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white", fontSize: 24 }}>{t("help")}</Text>
        <Text style={{ color: "white", marginTop: 10 }}>{t("faq")}</Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: "white", fontSize: 24 }}>{t("legal")}</Text>
        <Text style={{ color: "white", marginTop: 10 }}>{t("copyright")}</Text>
        <Text style={{ color: "white", marginTop: 5 }}>{t("privacy")}</Text>
        <Text style={{ color: "white", marginTop: 5 }}>{t("terms")}</Text>
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
          {t("socials")}
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
        <Text style={{ color: "white", marginTop: 10 }}>{t("rights")}</Text>
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
