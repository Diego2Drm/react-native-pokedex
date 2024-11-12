import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../components/Pokemon/Header";
import { Type } from "../components/Pokemon/Type";
import { Stats } from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AddFavorite } from "../components/Pokemon/AddFavorite";
import useAuth from "../hooks/useAuth"

function Pokemon(props) {
  const { navigation, route: { params }, } = props;
  const [pokemon, setPokemon] = useState(null);
  const { auth }= useAuth()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <AddFavorite id={pokemon?.id}/>,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

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
      <ScrollView>
        <Header 
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
        />

        <Type types={pokemon.types}/>
        <Stats stats={pokemon.stats}/>
      </ScrollView>
    );
};

export { Pokemon }