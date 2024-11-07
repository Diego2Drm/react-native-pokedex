import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Favorite } from "../screens/Favorite";
import { Account } from "../screens/Account";
import Icon from "react-native-vector-icons/FontAwesome5";
import { PokedexNavigation } from "./PokedexNavigation";


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={Favorite} options={{
        tabBarLabel: "Favoritos",
        headerTitleAlign: "center",
        title: "Favoritos",
        tabBarIcon: ({ color, size }) => (<Icon name="heart" color={color} size={size} />)
      }} />
      <Tab.Screen name="Pokedex" component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          tabBarIcon: () => renderPokeball()
        }}
      />

      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          headerTitleAlign: "center",
          title: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (<Icon name="user" color={color} size={size} />)
        }}
      />
    </Tab.Navigator>
  );
};

function renderPokeball() {
  return (
    <Image source={require('../assets/pokeball.png')} style={{ width: 75, height: 75, top: -18 }} />
  )
}




export { Navigation }