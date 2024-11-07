import react from "react";
import { Image, Pressable, View } from "react-native";
import { StyleSheet, Text } from "react-native";

function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Vamos a ${pokemon.name}`);
  }

  return (
   <View style={styles.container}>
     <Pressable onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{uri: pokemon.image}} style={styles.image}/>
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
    height: "auto",
    width: 170,
    marginBottom: 50,
    pointerEvents: "box-none"
  },
  spacing: {
    flex: 1,
    padding: 10,
  },
  bgStyles:{
    backgroundColor: "gray"
  },
  number:{
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
  }
})


export { PokemonCard };