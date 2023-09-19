import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export default function MovieList() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = [
    { value: "", label: "All" },
    { value: "28", label: "Action" },
    { value: "35", label: "Comedy" },
    { value: "27", label: "Horror" },
    { value: "878", label: "Sci-Fi" },
    { value: "18", label: "Drama" },
    { value: "9648", label: "Mystery" },
    { value: "10749", label: "Romance" },
    { value: "10402", label: "Musical" },
  ];

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2718329d450e46aabda8f0221fe92a73`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setFilteredMovies(json.results);
      })
      .catch((err) => console.log(err));
  };

  const filterMoviesByGenre = (genreValue) => {
    if (genreValue === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(parseInt(genreValue))
      );
      setFilteredMovies(filtered);
    }
    setSelectedGenre(genreValue);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.genreBtnContainer}
      >
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre.value}
            onPress={() => filterMoviesByGenre(genre.value)}
            style={[
              styles.genreBtn,
              {
                backgroundColor:
                  genre.value === selectedGenre ? "#800080" : "#333",
              },
            ]}
          >
            <Text style={styles.btnText}>{genre.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={filteredMovies}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { movie: item })}
          >
            <View style={styles.card}>
              <Image
                style={styles.item}
                source={{
                  uri: `https://www.themoviedb.org/t/p/w500/${item.poster_path}`,
                }}
              />
              <View style={styles.imdb}>
                <Text>IMBD: {Math.floor(item.vote_average)}</Text>
              </View>
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
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
  },
  genreBtnContainer: {
    marginVertical: 20,
  },
  genreBtn: {
    padding: 15,
    backgroundColor: "#142036",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
  },
  card: {
    margin: 10,
    marginLeft: 25,
    width: (windowWidth - 80) / 2,
    flex: 1,
  },
  item: {
    height: 200,
    width: "100%",
  },
  movieTitle: {
    fontSize: 20,
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
