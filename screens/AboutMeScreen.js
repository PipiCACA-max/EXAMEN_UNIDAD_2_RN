import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AboutMeScreen({ navigation }) {
  return (
    <View style={styles.container}>

        <Text style={styles.title}>Sobre Mí</Text>
        <View style={styles.card}>
            <Text style={styles.text}>
                Soy estudiante de Tecnologías de la Información en 5° cuatrimestre.
            </Text>
            <Text style={styles.text}>
                Me apasiona el desarrollo móvil, el diseño UI y la programación y el cigarrito.
            </Text>
        </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodFav")}>
        <Text style={styles.buttonText}>Comidas Favoritas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MoviesFav")}>
        <Text style={styles.buttonText}>Películas Favoritas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.backText}>Volver a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    elevation: 5
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#6C63FF',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  backButton: {
    marginTop: 10
  },
  backText: {
    color: '#6C63FF',
    fontWeight: 'bold'
  }
});