import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";

const windowWidth = Dimensions.get("window").width;

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2718329d450e46aabda8f0221fe92a73`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={styles.item}
              source={{
                uri: `https://www.themoviedb.org/t/p/w500/${item.poster_path}`,
              }}
            />
            <Pressable style={styles.imdb}>
              <Text>IMBD: {Math.floor(item.vote_average)}</Text>
            </Pressable>
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    width: (windowWidth - 80) / 2,
    alignItems: "center",
  },
  item: {
    height: 200,
    width: "100%",
  },
  movieTitle: {
    fontSize: 24,
    marginTop: 5,
    color: "white",
    textAlign: "center",
  },
  flatListContent: {
    alignItems: "center",
  },
  imdb: {
    padding: 4,
    backgroundColor: "yellow",
    position: "absolute",
    top: 5,
    right: 5,
    borderRadius: 5,
  },
});
