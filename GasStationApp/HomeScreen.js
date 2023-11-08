// HomeScreen.js
// hola
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Button, Text } from '@ui-kitten/components';

const HomeScreen = ({ route, navigation }) => {
  const { clientId = '', placa = '', gasType = 'Magna', gasAmount = '' } = route.params || {};
  const [order, setOrder] = useState(gasAmount.toString());
  const [typeOfGas, setTypeOfGas] = useState(gasType);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleConfirmOrder = () => {
    // Logic for confirming the order
    // Send confirmation to the backend
  };

  return (
    <ScrollView style={styles.container}>
      <Text category='h1' style={styles.title}>Oxxo Gas</Text>
      <Text category='s1' style={styles.labelCliente}>Cliente</Text>
      <Text category='p1' style={styles.value}>{clientId}</Text>
      <Text category='s1' style={styles.label}>Placa</Text>
      <TextInput 
        style={styles.input}
        value={placa}
        onChangeText={(newPlaca) => {/* Logic to handle placa change */}}
        keyboardType="default"
      />
      <Text category='s1' style={styles.label}>Carga L</Text>
      <TextInput 
        style={styles.input}
        value={order}
        onChangeText={(newOrder) => setOrder(newOrder)}
        keyboardType="numeric"
      />
      <Text category='s1' style={styles.label}>Tipo de Gasolina</Text>
      <TextInput 
        style={styles.input}
        value={typeOfGas}
        onChangeText={(newGasType) => setTypeOfGas(newGasType)}
        keyboardType="default"
      />
      <View style={styles.buttonContainer}>
        <Button 
          style={styles.confirmButton}
          onPress={handleConfirmOrder}
        >
          Confirmar Orden
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 50, 
  },
  labelCliente: {
    color: 'black',
    marginTop: 32, // Increased top margin
    fontSize: 20, // Increased font size
  },
  label: {
    color: 'black',
    marginTop: 16,
    fontSize: 18, // Increased font size
  },
  value: {
    color: 'black',
    marginBottom: 16,
    fontSize: 18, // Increased font size
  },
  input: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    marginTop: 8,
    marginBottom: 16,
    color: 'black',
    fontSize: 18, // Increased font size for better readability
  },
  confirmButton: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  buttonContainer: {
    marginTop: 16,
    paddingBottom: 50, // Added bottom padding to ensure button is not covered
  },
});

export default HomeScreen;
