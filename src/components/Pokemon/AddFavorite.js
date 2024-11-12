import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addPokemonFavorite, isPokemonFavoriteApi } from "../../api/favoriteApi";

function AddFavorite(props) {
  const { id } = props;
  const [ isFavorite, setIsFavorite ] = useState(undefined);
  const [ reloadCheck, setReloadCheck ] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;
  
  useEffect(() => {
    ( async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response)
      } catch (error) {
        throw error
      }
    })()
  },[id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck( (prev) => !prev);
  }

  const addFavorite = async () => {
   try {
    await addPokemonFavorite(id)
    onReloadCheckFavorite();
   } catch (error) {
    throw error
   }
  }

  const removeFavorite = () => {
    console.log("Eliminar de favoritos");
    
  }

  return(
    <Icon 
    name="heart"
    color="#fff"
    size={20}
    onPress={isFavorite ? removeFavorite : addFavorite}
    style={{marginRight: 20}}
    />
  );
};

export { AddFavorite };


// yarn add @react-native-async-storage/async-storage