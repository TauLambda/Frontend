// Importaciones de React y navegación
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importación de componentes
import Welcome from './Welcome';
import CargaParticular from './CargaParticular';
import HistorialParticular from './HistorialParticular';
import PerfilParticular from './PerfilParticular';
import LogIn from './LogIn';
import SignIn from './SignIn';
import TarjetaCredito from './TarjetaCredito';
import AgregarTarjeta from './AgregarTarjeta';
import Cashback from './Cashback';

// Creación del stack de navegación
const Stack = createNativeStackNavigator();

// Componente principal que define la estructura de las rutas de la aplicación
const Rutas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Pantalla de inicio de sesión */}
        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{ title: 'Login' }}
        />

        {/* Pantalla de registro */}
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />

        {/* Pantalla de bienvenida */}
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />

        {/* Pantalla de carga particular */}
        <Stack.Screen
          name="CargaParticular"
          component={CargaParticular}
          options={{ title: 'Carga Particular' }}
        />

        {/* Pantalla de historial particular */}
        <Stack.Screen
          name="HistorialParticular"
          component={HistorialParticular}
          options={{ title: 'Historial Particular' }}
        />

        {/* Pantalla de perfil particular */}
        <Stack.Screen
          name="PerfilParticular"
          component={PerfilParticular}
          options={{ title: 'Perfil Particular' }}
        />

        {/* Pantalla de tarjeta de crédito */}
        <Stack.Screen
          name="TarjetaCredito"
          component={TarjetaCredito}
          options={{ title: 'Tarjeta de Credito' }}
        />

        {/* Pantalla para agregar tarjeta */}
        <Stack.Screen
          name="AgregarTarjeta"
          component={AgregarTarjeta}
          options={{ title: 'Agregar Tarjeta' }}
        />

        {/* Pantalla de cashback */}
        <Stack.Screen
          name="Cashback"
          component={Cashback}
          options={{ title: 'Cashback' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exportación del componente de rutas
export default Rutas;
