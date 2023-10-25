import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import LogoImage from '../images/OXXOGAS.png';

const GasolinaCard = ({ servicio, precio, isSelected, onSelect }) => {
  const coloresGasolina = {
    Diesel:'#0D0D0D',
    Magna:'#038C25',
    Premium:'#D9183B',
  };

  const colorFondo = coloresGasolina[servicio];

  return(
    <TouchableOpacity
      style={[
        styles.card,
        { borderColor: isSelected ? '#FDC32F' : '#ddd'},
        { backgroundColor:colorFondo},
      ]}
      onPress={() => onSelect(servicio)}
    >
      <View
        style={{
          flexDirection:'column',
          justifyContent:'space-around',
          alignItems:'center'
        }}
      >
        <Text style={{color:'white'}}>{servicio}</Text>
        <Text style={{color:'white'}}>$ {precio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PagoCard = ({ tipoPago, isSelected, onSelect }) => {
  let iconComponent;

  if (tipoPago === 'Tarjeta de Credito') {
    iconComponent = <FontAwesome name="credit-card" size={24} color="black" />;
  } else if (tipoPago === 'Cashback') {
    iconComponent = <MaterialCommunityIcons name="cash-refund" size={24} color="black" />;
  }

  return(
    <TouchableOpacity
      style={[
        styles.card,
        { borderColor: isSelected ? '#FDC32F' : '#ddd' },
        { backgroundColor:'white' },
      ]}
      onPress={() => onSelect(tipoPago)}
    >
      {iconComponent}
      <Text style={{textAlign:'center', paddingTop:4,}}>{tipoPago}</Text>
    </TouchableOpacity>
  )
}

const CargaParticular = ({navigation}) => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [monto, setMonto] = useState('');
  const [litros, setLitros] = useState('');

  const servicios = [
    {servicio: 'Magna', precio:'22.49'},
    {servicio: 'Premium', precio:'24.79'},
    {servicio: 'Diesel', precio:'23.99'},
  ];

  const tipoPago = [
    {tipo:'Tarjeta de Credito'},
    {tipo:'Cashback'},
  ];

  return (
    <View style={[styles.container]}>
      <View
        style={{
          flex:0.5,
          padding:4,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#DE2924',
          borderRadius:4,
        }}
      >
        <Text
          style={{
            fontSize:20,
            color:'white',
          }}
        > Realizar Carga </Text>
      </View>
      <View
        style={{
          flex:6,
          padding:4,
          paddingTop:8,
        }}
      >
        <Text>Precio por Litro</Text>
        <View
          style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
          }}
        >
          {servicios.map((infoServicio) => (
            <GasolinaCard
              key={infoServicio.servicio}
              servicio={infoServicio.servicio}
              precio={infoServicio.precio}
              isSelected={selectedService === infoServicio.servicio}
              onSelect={(selectedService) => {
                setSelectedService(selectedService);
                setMonto('');
                setLitros('');
              }}
            />
          ))}
        </View>
        <View
          style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'strech',
          }}
        >
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
            <MaterialIcons name="attach-money" size={20} color="#666" style={{marginRight:5,}} />
            <TextInput
              placeholder='Monto'
              style={{flex:1}}
              keyboardType="numeric"
              value={monto}
              onChangeText={(text) => {
                setMonto(text);
                if (text && selectedService) {
                  const precioPorLitro = parseFloat(servicios.find((s) => s.servicio === selectedService).precio);
                  const montoNumeric = parseFloat(text);
                  const litrosCalculados = montoNumeric / precioPorLitro;
                  setLitros(litrosCalculados.toFixed(2));
                }
              }}
              />
          </View>
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25,}}>
            <Fontisto name="blood-drop" size={20} color="#666" style={{marginRight:13,}} />
            <TextInput
              placeholder='Litros'
              style={{flex:1}}
              keyboardType="numeric"
              value={litros}
              onChangeText={(text) => {
                setLitros(text);
                if (text && selectedService) {
                  const precioPorLitro = parseFloat(servicios.find((s) => s.servicio === selectedService).precio);
                  const litrosNumeric = parseFloat(text);
                  const montoCalculado = litrosNumeric * precioPorLitro;
                  setMonto(montoCalculado.toFixed(2));
                }
              }}
              />
          </View>
        </View>
        <Text>Metodo de Pago</Text>
        <View
          style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
          }}
        >
          {tipoPago.map((infoPago) => (
            <PagoCard
              key={infoPago.tipo}
              tipoPago={infoPago.tipo}
              isSelected={selectedPayment === infoPago.tipo}
              onSelect={(selectedPayment) => setSelectedPayment(selectedPayment)}
            />
          ))}
        </View>
        <View
          style={{
            flex:0.5,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <TouchableOpacity
            style={{
              width:250,
              height:50,
              borderRadius:25,
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:"#FDC32F",
            }}
          >
            <Text
              style={{
                fontSize:20,
                color:'white',
              }}
            >Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CargaParticular

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    flexDirection:'column',
  },
  card: {
    width:'30%',
    height:'70%',
    padding:10,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderRadius:10,
  },
});