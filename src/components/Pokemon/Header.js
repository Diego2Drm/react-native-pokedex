import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";


function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);
  const bgStyles = [{ backgroundColor: color, ...styles.bg }]


  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    paddingBottom: 30,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 40,
    marginTop: 30,
    position: "absolute"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  }
})

export { Header };