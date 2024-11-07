import react, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

function Pokedex() {
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    // funcion anomima autoejecutable () ()
    ( async () => {
      await loadPokemons();
    })();
  } ,[]);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      
      const pokemonArray = [];

      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        })
        
      }
      setPokemons([...pokemons, ...pokemonArray]);
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