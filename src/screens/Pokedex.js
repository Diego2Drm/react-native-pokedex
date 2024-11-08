import react, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import { PokemonList } from "../components/PokemonList2";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNxtUrl] = useState(null);
  const [loading, setloading ] = useState(false);

  useEffect(() => {
    // funcion anomima autoejecutable () ()
    (async () => {
      await loadPokemons();
    })();
  }, []);
  
  const loadPokemons =  useCallback( async () => {
    try {
      setloading(true);
      const response = await getPokemonApi(nextUrl);
      setNxtUrl(response.next)

      const pokemonArray = [];

      for await (const pokemon of response.results) {
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
    } finally {
      setloading(false);
    }
  },[pokemons, nextUrl])


  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} isLoading={loading}/>
    </SafeAreaView>
  );
};

export { Pokedex };