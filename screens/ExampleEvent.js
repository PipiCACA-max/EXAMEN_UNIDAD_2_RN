import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ExampleEvent({ navigation, route }) {

  const { nombre, contador, total } = route.params || {};
  const valorContador = contador ?? total;

  const handleSimpleAlert = () => {
    Alert.alert(
      "Evento activado",
      "Este es un ejemplo de Alert funcionando correctamente."
    );
  };

  const handleShowData = () => {
    Alert.alert(
      "Datos recibidos",
      `Nombre: ${nombre || "No recibido"}\nContador: ${valorContador ?? "No recibido"}`
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>📌 Pantalla de Eventos</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre recibido:</Text>
        <Text style={styles.value}>{nombre || "No recibido"}</Text>

        {valorContador !== undefined && (
          <>
            <Text style={styles.label}>Contador recibido:</Text>
            <Text style={styles.value}>{valorContador}</Text>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleSimpleAlert}>
        <Text style={styles.buttonText}>Mostrar Alert</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={handleShowData}>
        <Text style={styles.buttonText}>Mostrar Datos en Alert</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.backText}>Volver a Home</Text>
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

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#3b3b98',
  },

  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    elevation: 8,
  },

  label: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C63FF',
  },

  primaryButton: {
    backgroundColor: '#6C63FF',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },

  secondaryButton: {
    backgroundColor: '#4CAF50',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },

  backButton: {
    marginTop: 10,
  },

  backText: {
    color: '#3b3b98',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});