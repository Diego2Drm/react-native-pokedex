import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";

function Pokemon(props) {
  const { navigation, route: { params }, } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if(!pokemon) return null;
  
    return (
      <View>
        <Text>Detalles Pokemon</Text>
        <Text>{pokemon.name}</Text>
        <Image source={{ uri: pokemon.sprites.other["official-artwork"].front_default }} style={styles.image}/>
      </View>
    );
};

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
  },
})

export { Pokemon }