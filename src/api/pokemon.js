import { API_HOST } from "../utils/Constants"

export async function getPokemonApi(endpoinUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpoinUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }

};

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function  getPokemonDetailsApi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
}