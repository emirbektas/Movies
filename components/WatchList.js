import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

export default function WatchList() {
  const list = useSelector((state) => state.list.list);

  return (
    <ScrollView style={{ flex: 1 }}>
      {list.length === 0 ? (
        <Text style={styles.emptyListText}>Watchlist is empty.</Text>
      ) : (
        list.map((item) => (
          <View key={item.id}>
            <View style={styles.cardContent}>
              <Image
                style={styles.movieImg}
                source={{
                  uri: `https://www.themoviedb.org/t/p/w500/${item.poster_path}`,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Text style={styles.date}>{item.release_date}</Text>
                  <Text style={{ color: "white", marginRight: 15 }}>_</Text>
                  <Text style={styles.lang}>
                    Langue: {item.original_language}
                  </Text>
                </View>
                <Text numberOfLines={5} style={styles.overview}>
                  {item.overview}
                </Text>
                <Text style={styles.imdbPoint}>
                  <AntDesign name="star" size={16} color="yellow" />{" "}
                  {Math.floor(item.vote_average)}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginVertical: 10,
              }}
            />
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  emptyListText: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontWeight: 700,
    fontSize: 24,
    marginTop: 50,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
  },
  movieImg: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  movieTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
  date: {
    color: "white",
    marginTop: 5,
    marginRight: 15,
  },
  lang: {
    color: "white",
    marginTop: 5,
  },
  overview: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    paddingRight: 25,
  },
  imdbPoint: {
    color: "white",
    marginTop: 5,
  },
});
