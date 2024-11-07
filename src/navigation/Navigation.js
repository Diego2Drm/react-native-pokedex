import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Favorite } from "../screens/Favorite";
import { Pokedex } from "../screens/Pokedex";
import { Account } from "../screens/Account";
import Icon from "react-native-vector-icons/FontAwesome5";


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={Favorite} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (<Icon name="heart" color={color} size={size} />)
      }} />
      <Tab.Screen name="Pokedex" component={Pokedex} 
      options={{
        tabBarLabel: "",
        tabBarIcon: () => renderPokeball()
      }}
      />

      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (<Icon name="user" color={color} size={size} />)
        }}
      />
    </Tab.Navigator>
  );
};

function renderPokeball(){
  return(
    <Image source={require('../assets/pokeball.png')} style={{width: 75, height: 75, top: -18}}/>
  )
}




export { Navigation }