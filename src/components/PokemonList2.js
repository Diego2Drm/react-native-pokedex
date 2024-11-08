import react from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View,Platform } from "react-native";
import { PokemonCard } from "./PokemonCard";

function PokemonList(props) {
  const { pokemons, loadPokemons, isNext, isLoading } = props;

  const loadMore = () => {
    loadPokemons();
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon, index) => String(index)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={!isLoading && isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator size="large" color="#aeaeae" style={styles.spinner} />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 30,
    // paddingTop: 60,
    marginTop: Platform.OS === "android" ? 10 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  }
})
export { PokemonList };