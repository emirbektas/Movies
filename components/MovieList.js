import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import i18next from "../services/i18next";
import { useTranslation } from "react-i18next";

export default function MovieList() {
  const { t } = useTranslation();

  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = [
    { value: "", label: `${t("all")}` },
    { value: "28", label: `${t("action")}` },
    { value: "35", label: `${t("comedy")}` },
    { value: "27", label: `${t("horror")}` },
    { value: "878", label: `${t("sci-fi")}` },
    { value: "18", label: `${t("drama")}` },
    { value: "9648", label: `${t("mystery")}` },
    { value: "10749", label: `${t("romance")}` },
    { value: "10402", label: `${t("musical")}` },
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { movie: item })}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        <Image
          style={styles.item}
          source={{
            uri: `https://www.themoviedb.org/t/p/w500/${item.poster_path}`,
          }}
        />
        <View style={styles.imdb}>
          <Text>IMDB: {Math.floor(item.vote_average)}</Text>
        </View>
        <Text style={styles.movieTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

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
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
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
    flex: 1,
  },
  cardContent: {
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
