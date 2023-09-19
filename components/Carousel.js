import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";

export default function Carousel() {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  const carouselData = [
    {
      id: "01",
      image: require("../assets/slide1.jpg"),
      title: "Drive",
      imdb: 8.6,
    },
    {
      id: "02",
      image: require("../assets/slide2.jpg"),
      title: "Dark",
      imdb: 8.2,
    },
    {
      id: "03",
      image: require("../assets/slide3.jpg"),
      title: "Batman",
      imdb: 9.2,
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 500, width: screenWidth }}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.title}>{item.title}</Text>

          <Pressable style={styles.imdbBtn}>
            <Text style={styles.movieimdb}>{item.imdb}</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const handleScroll = (e) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;

    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % carouselData.length;
    const scrollTimeout = setTimeout(() => {
      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 2000);

    return () => clearTimeout(scrollTimeout);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textcontainer: {
    position: "absolute",
    left: 20,
    bottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
  },
  movieimdb: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  imdbBtn: {
    paddingVertical: 8,
    backgroundColor: "yellow",
    borderRadius: 6,
  },
});
