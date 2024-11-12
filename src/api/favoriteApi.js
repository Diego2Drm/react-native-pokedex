import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash"
import { FAVORITE_STORAGE } from "../utils/Constants"

// SABER SI ESTA GUARDADO
export async function getPokemonFavoriteApi(){
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return JSON.parse(response || []);
  } catch (error) {
    throw error;
  }
}

// GARDAR A FAVORITOS
export async function addPokemonFavorite(id) {
  try {
    const favoriteArray = await getPokemonFavoriteApi();
    favoriteArray.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favoriteArray))
  } catch (error) {
    throw error;
  }
}