import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavorite } from "../../api/favoriteApi";

function AddFavorite(props) {
  const { id } = props;

  const addFavorite = async () => {
   await addPokemonFavorite(id)
  }

  return(
    <Icon 
    name="heart"
    color="#fff"
    size={20}
    onPress={addFavorite}
    style={{marginRight: 20}}
    />
  );
};

export { AddFavorite };


// yarn add @react-native-async-storage/async-storage