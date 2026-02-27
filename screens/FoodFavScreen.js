import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function FoodFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>🍔 Comidas Favoritas</Text>

      <View style={styles.card}>
        <Image 
          source={require('../assets/food1.jpg')} 
          style={styles.image}
        />
        <Text style={styles.label}>Pizza</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../assets/food2.jpg')} 
          style={styles.image}
        />
        <Text style={styles.label}>Pasta</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../assets/food3.jpg')} 
          style={styles.image}
        />
        <Text style={styles.label}>Sandwich</Text>
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
    backgroundColor: '#fff7ed'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff6b00'
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
    height: 150,
    borderRadius: 12
  },
  label: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#ff6b00',
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