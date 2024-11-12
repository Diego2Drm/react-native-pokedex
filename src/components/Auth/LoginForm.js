import React from "react";
import { Button } from "react-native";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre del Usuario"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button title="Ingresar" onPress={() => alert("Ingresando...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});