import react from "react";
import { Image, Pressable, View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { getColorByPokemonType } from "../utils/getColorByPokemonType";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";

function PokemonCard(props) {
  const { pokemon } = props;
  const pokemonColor = getColorByPokemonType(pokemon.type)
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };
  const navigation = useNavigation();

  const goToPokemon = () => {
  // solo datos planos ---> un ID/Number y Texto ... No funciones, No Objetos, No Compnentes
    navigation.navigate("Pokemon", { id: pokemon.id});
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={goToPokemon}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={bgStyles}>
              <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
              <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
  },
  card: {
    flex: 1,
    height: 135,
    width: 150
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export { PokemonCard };