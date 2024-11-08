import react from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PokemonCard } from "./PokemonCard";

function PokemonList(props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon, index) => String(index)}
      renderItem={({ item }) => <PokemonCard pokemon={item}/>}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
      paddingHorizontal: 5,
      // paddingTop: 60,
  }
})


export { PokemonList };