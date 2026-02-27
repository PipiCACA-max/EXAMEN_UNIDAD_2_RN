import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Counter({ navigation }) {

  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleZero = () => setCount(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>🔢 Contador</Text>

      {/* Caja del número */}
      <View style={styles.counterBox}>
        <Text style={styles.value}>{count}</Text>
      </View>

      {/* Botones de acción */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.circleButton} onPress={handleIncrement}>
          <Text style={styles.circleText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circleButton} onPress={handleDecrement}>
          <Text style={styles.circleText}>−</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={handleZero}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.sendButton} 
        onPress={() => navigation.navigate("ExampleEvent", { contador: count })}
      >
        <Text style={styles.buttonText}>Enviar a Eventos</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3b3b98',
  },

  counterBox: {
    backgroundColor: '#fff',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    marginBottom: 30,
  },

  value: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#6C63FF',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  circleButton: {
    backgroundColor: '#6C63FF',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    elevation: 5,
  },

  circleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  resetButton: {
    backgroundColor: '#FF6B6B',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },

  sendButton: {
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