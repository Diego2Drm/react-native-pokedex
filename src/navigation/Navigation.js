import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import { Favorite } from "../screens/Favorite";
import { Pokedex } from "../screens/Pokedex";
import { Account } from "../screens/Account";


const Tab = createBottomTabNavigator();

function Navigation() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};

export { Navigation }