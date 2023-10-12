import React from 'react'
import { Button, Text, View } from 'react-native'

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

export default Welcome;