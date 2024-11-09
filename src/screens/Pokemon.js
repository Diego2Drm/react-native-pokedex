import React from "react";
import { Text, View } from "react-native";

function Pokemon(props) {
const { navigation , route } = props;
  console.log(route);
  
    return(
      <View>
        <Text>Pokemon</Text>
      </View>
    );
};

export { Pokemon }