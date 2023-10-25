import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '@ui-kitten/components'

const DATA = [
  {
    id: '1',
    TipoGas:'Premium',
    Carga:27.20,
    FechaTransaccion:'2023-10-13 12:12:29',
    Monto:200.50,
    MetodoPago:'Citibanamex'
  }
]

const ListItem = ({ item }) => {
  return(
    <View
      style={{
        flex:1,
        backgroundColor:'crimson',
        borderRadius: 15,
        elevation:10,
      }}
    >
      <Text>{item.id}</Text>
    </View>
  )
}

const HistorialParticular = ({navigation}) => {
  return (
    <View
      style={{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
      }}
    >
      <View
        style={{
          flex:1,
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Text category='s1'>Cashback</Text>
        <Text category='h4'>$550.50</Text>
      </View>
      <View
        style={{
          flex:4,
        }}
      >
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ListItem item={item} />}
          numColumns={1}
        />
      </View>
    </View>
  )
}

export default HistorialParticular

const styles = StyleSheet.create({})