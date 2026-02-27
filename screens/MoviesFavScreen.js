import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MoviesFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>🎬 Películas Favoritas</Text>

      <View style={styles.card}>
        <Image 
          source={require('../assets/movie1.jpg')} 
          style={styles.image}
        />
        <Text style={styles.label}>Inland Empire</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../assets/movie2.jpg')} 
          style={styles.image}
        />
        <Text style={styles.label}>Blue Velvet</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../assets/movie3.jpg')} 
          style={styles.image}
        />
        <Text style={styles.label}>Eyes Wide Shut</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("AboutMe")}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#eef2ff'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3b3b98'
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5
  },
  image: {
    width: 200,
    height: 250,
    borderRadius: 12
  },
  label: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#3b3b98',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});