import React from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../redux/listSlice";
import i18next from "../services/i18next";
import { useTranslation } from "react-i18next";

export default function DetailScreen({ route }) {
  const { t } = useTranslation();

  const { movie } = route.params;

  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();

  const addMovieToList = (item) => {
    dispatch(addToList(item));
  };
  const removeMovieFromList = (item) => {
    dispatch(removeFromList(item));
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
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
        <Text style={styles.date}>
          {t("release-date")}: {movie.release_date}
        </Text>

        {list.some((value) => value.id == movie.id) ? (
          <TouchableOpacity
            style={styles.listBtn}
            onPress={() => removeMovieFromList(movie)}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              {t("remove-from-list")}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.listBtn}
            onPress={() => addMovieToList(movie)}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              {t("add-to-list")}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
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
    marginVertical: 20,
    color: "white",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
  },
  overview: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 20,
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
    marginVertical: 15,
    fontSize: 16,
  },
  listBtn: {
    padding: 15,
    backgroundColor: "#142036",
    marginHorizontal: 130,
    marginTop: 20,
    borderRadius: 10,
  },
});
