import react from "react";
import { Pokedex } from "../screens/Pokedex";
import { Pokemon } from "../screens/Pokemon";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function PokedexNavigation() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Pokedex-Principal" component={Pokedex}
        options={{headerShown: false}}/>
        <Stack.Screen name="Pokemon" component={Pokemon}  options={{headerShown: false}}/>
      </Stack.Navigator>
    );
};

export { PokedexNavigation };