//Importación de librerías
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importación de pantallas
import Welcome from './Welcome';
import CargaParticular from './CargaParticular';
import HistorialParticular from './HistorialParticular';
import PerfilParticular from './PerfilParticular';
import LogIn from './LogIn';
import SignIn from './SignIn';
import TarjetaCredito from './TarjetaCredito';
import AgregarTarjeta from './AgregarTarjeta';
import Cashback from './Cashback';
import AgregarPlaca from './AgregarPlaca';

// Crear una instancia del Stack Navigator
const Stack = createNativeStackNavigator();

// Definir el componente de rutas
const Rutas = () => {
return (
    <NavigationContainer>
    <Stack.Navigator>
        {/* Pantalla de inicio de sesión */}
        <Stack.Screen
        name="Login"
        component={LogIn}
        options={{ title: 'Iniciar sesión' }}
        />

        {/* Pantalla de registro */}
        <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{ title: 'Registrarse' }}
        />

        {/* Pantalla de bienvenida */}
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: 'Bienvenido' }}
        />

        {/* Pantalla de carga particular */}
        <Stack.Screen
        name="CargaParticular"
        component={CargaParticular}
        options={{ title: 'Carga particular' }}
        />

        {/* Pantalla de historial particular */}
        <Stack.Screen
        name="HistorialParticular"
        component={HistorialParticular}
        options={{ title: 'Historial particular' }}
        />

        {/* Pantalla de perfil particular */}
        <Stack.Screen
        name="PerfilParticular"
        component={PerfilParticular}
        options={{ title: 'Perfil particular' }}
        />

        {/* Pantalla de tarjeta de crédito */}
        <Stack.Screen
        name="TarjetaCredito"
        component={TarjetaCredito}
        options={{ title: 'Tarjeta de crédito' }}
        />

        {/* Pantalla de agregar tarjeta */}
        <Stack.Screen
        name='AgregarTarjeta'
        component={AgregarTarjeta}
        options={{ title: 'Agregar tarjeta' }}
        />

        {/* Pantalla de cashback */}
        <Stack.Screen
        name='Cashback'
        component={Cashback}
        options={{ title: 'Cashback' }}
        />

        {/* Pantalla de agregar placa */}
        <Stack.Screen
        name='AgregarPlaca'
        component={AgregarPlaca}
        options={{ title: 'Agregar placa' }}
        />
    </Stack.Navigator>
    </NavigationContainer>
);
};

export default Rutas;
