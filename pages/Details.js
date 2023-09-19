import React from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";

export default function DetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image
          style={styles.item}
          source={{
            uri: `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`,
          }}
        />
        <Pressable style={styles.imdbPoint}>
          <Text>IMBD: {Math.floor(movie.vote_average)}</Text>
        </Pressable>
      </View>
      <Text style={styles.title}> {movie.title}</Text>
      <Text style={styles.overview}> {movie.overview}</Text>
      <Text style={styles.date}>Release Date: {movie.release_date}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 500,
    width: "100%",
    resizeMode: "cover",
  },
  title: {
    marginVertical: 10,
    color: "white",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
  },
  overview: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  imdbPoint: {
    padding: 5,
    backgroundColor: "yellow",
    borderRadius: 5,
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  date: {
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
  },
});
