import React from 'react'
import { Button } from 'react-native'

const Welcome = ({navigation}) => {
  return (
    <Button
        title="Ir a Historial"
        onPress={() =>
            navigation.navigate('Historial')
        }
    />
  );
};

const PantallaHistorial = ({navigation, route}) => {
    return <Text></Text>
};

export default Welcome