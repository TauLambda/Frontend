import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './Welcome';
import CargaParticular from './CargaParticular';
import HistorialParticular from './HistorialParticular';
import PerfilParticular from './PerfilParticular';
import LogIn from './LogIn';
import SignIn from './SignIn';

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
        </Stack.Navigator>
</NavigationContainer>
);
};

export default Rutas;