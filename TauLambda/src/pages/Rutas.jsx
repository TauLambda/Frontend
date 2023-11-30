import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

const Rutas = () => {
return (
<NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={LogIn}
                options={{ title: 'Login'}}
                />

                <Stack.Screen
                        name="Signin"
                        component={SignIn}
                        options={{ title: 'Sign In'}}
                />

                <Stack.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{ title: 'Welcome'}}
                />

                <Stack.Screen
                name="CargaParticular"
                component={CargaParticular}
                options={{ title: 'Carga Particular'}}
                />

                <Stack.Screen
                        name="HistorialParticular"
                        component={HistorialParticular}
                        options={{ title: 'Historial Particular' }}
                />

                <Stack.Screen
                name="PerfilParticular"
                component={PerfilParticular}
                options={{ title: 'Perfil Particular' }}
                />

                <Stack.Screen
                name="TarjetaCredito"
                component={TarjetaCredito}
                options={{ title: 'Tarjeta de Credito'}}
                />

                <Stack.Screen
                name='AgregarTarjeta'
                component={AgregarTarjeta}
                options={{ title: 'Agregar Tarjeta' }}
                />

                <Stack.Screen
                name='Cashback'
                component={Cashback}
                options={{ title: 'Cashback' }}
                />

                <Stack.Screen
                name='AgregarPlaca'
                component={AgregarPlaca}
                options={{title: 'Agregar Placa'}}/>
                
        </Stack.Navigator>
</NavigationContainer>
);
};

export default Rutas;