import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>Alessandro Navarro Silva</Text>
        <Text style={styles.subtitle}>Tecnologías de la Información</Text>
        <Text style={styles.subtitle}>5° "B" BIS</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("ExampleEvent", { nombre: 'Solomeo Paredes' })
        }
      >
        <Text style={styles.buttonText}>📌 Ir a Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Counter", {nombre: "Solomeo Paredes"})}
      >
        <Text style={styles.buttonText}>🔢 Ir a Contador</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AboutMe")}
      >
        <Text style={styles.buttonText}>👤 Ir a About Me</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 40,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3b3b98',
    marginBottom: 10,
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#6C63FF',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});