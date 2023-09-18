import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

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
        style={styles.deneme}
        data={movies}
        numColumns={3}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: `https://www.themoviedb.org/t/p/w500/${item.poster_path}`,
              }}
            />
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  deneme: {
    flex: 1,
  },
});
