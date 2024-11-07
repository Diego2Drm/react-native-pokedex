import react from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

function PokemonList(props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContainer}
    />


  );
};

const styles = StyleSheet.create({
  flatListContainer: {
      paddingHorizontal: 15,
  }
})


export { PokemonList };