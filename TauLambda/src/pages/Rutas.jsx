import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './Welcome';
import Historial from './Historial';
import LogIn from './LogIn';

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
                name="Welcome"
                component={Welcome}
                options={{ title: 'Welcome'}}
            />
            <Stack.Screen
                name="Historial"
                component={Historial}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rutas;