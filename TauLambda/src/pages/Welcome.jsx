import React from 'react'
import { Avatar, Text } from '@ui-kitten/components'
import { ImageBackground, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Image } from 'react-native';

import AvatarImage from '../images/senora.png';
import WelcomeImage from '../images/Brands_People_OxxoGas_gasolinera.png';
import GasImage from '../images/Gas.png';
import HistorialImage from '../images/Historial.png';

const DATA = [
  {
    id: '1',
    imagenUrl: GasImage,
  },
  {
    id: '2',
    imagenUrl: HistorialImage,
  }
];

const ListItem = ({ item }) => {
  return(
    <TouchableOpacity>
      <Image
        source={item.imagenUrl}
        style={{
          height: 240,
          width: 165,
          borderRadius:20,
        }}
      />
    </TouchableOpacity>
  )
}

const Welcome = ({navigation}) => {
  return (
    <View style={[
      styles.container,
      {
        flexDirection:'column'
      }
    ]}>
      <View style={{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        padding:5,
        }}>
        <Avatar
          source={AvatarImage}
          ImageComponent={ImageBackground}
          size='large'
        />
      </View>
      <View style={{
        flex:4,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        }}>
        <Image
          source={WelcomeImage}
          style={{
            height: '100%',
            width: '100%',
            borderRadius:15,
          }}
        />
      </View>
      <View style={{
        flex:4,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        }}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ListItem item={item}/>}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Welcome;
