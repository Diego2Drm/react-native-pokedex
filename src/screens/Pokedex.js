import react, { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi } from "../api/pokemon";

function Pokedex() {

  useEffect(() => {
    // funcion anomima autoejecutable () ()
    ( async () => {
      await loadPokemons();
    })();
  } ,[]);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }
  }


    return(
      <SafeAreaView>
        <Text>Pokedex</Text>
      </SafeAreaView>
    );
};

export { Pokedex };