import Icon from "react-native-vector-icons/FontAwesome5";

function AddFavorite(props) {
  const { id } = props;

  const addFavorite = () => {
    console.log("Añadido a favoritos", id);
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