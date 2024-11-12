import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonFavoriteApi } from "../api/favoriteApi";

function Favorite() {

  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
    
  }

    return(
      <SafeAreaView>
        <Text>Favorite</Text>
        <Button title="obtener Favoritos" onPress={checkFavorites}/>
      </SafeAreaView>
    );
};

export { Favorite };