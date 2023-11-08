// SignInScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Here, you would authenticate the user.
    // Upon success:
    navigation.navigate('Home', { username }); // Navigate to home screen
  };

  return (
    <View style={styles.container}>
      <Text category='h1' style={styles.pumpNumber}>Bomba Número #1</Text>
      <Text category='h1' style={styles.signInTitle}>Iniciar Sesión</Text>
      <Input
        value={username}
        label='Nombre de Usuario'
        placeholder='Introduce tu nombre de usuario'
        onChangeText={setUsername}
        style={styles.input}
      />
      <Input
        value={password}
        label='Contraseña'
        placeholder='Introduce tu contraseña'
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button onPress={handleSignIn} style={styles.signInButton}>Iniciar Sesión</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  pumpNumber: {
    marginBottom: 24,
    color: 'red',
    textAlign: 'center',
  },
  signInTitle: {
    marginBottom: 12,
    color: 'red',
    textAlign: 'center',
  },
  input: {
    marginBottom: 8,
  },
  signInButton: {
    backgroundColor: 'yellow',
    borderColor: 'yellow',
  },
});

export default SignInScreen;
