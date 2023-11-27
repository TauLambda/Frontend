import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createCard } from '../services/cardService';

const AgregarTarjeta = ({ navigation }) => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [numeroTarjetaFormateado, setNumeroTarjetaFormateado] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCVV] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  const userId = 5;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleConfirmar = () => {
    const numeroTarjetaSinEspacios = numeroTarjeta.replace(/\s/g, '');
    const mes = parseInt(fechaExpiracion.substring(0, 2), 10);

    if (numeroTarjeta && nombreTitular && fechaExpiracion && cvv) {
      if (numeroTarjetaSinEspacios.length === 16 && mes >= 1 && mes <= 12 && cvv.length === 3) {
        const jsonTarjeta = {
          Nombre: nombreTitular,
          NumeroTarjeta: numeroTarjeta,
          Expiracion: fechaExpiracion,
          CVV: cvv,
        };

        setJsonData(jsonTarjeta);
      } else {
        Alert.alert('Error', 'Por favor, ingresa valores válidos.', [
          { text: 'OK' },
        ]);
      };
    } else {
      Alert.alert('Error', 'Todos los campos deben contener información.', [
        { text: 'OK' },
      ]);
    }
  };

  useEffect(() => {
    console.log(`AgregarTarjeta: ${JSON.stringify(jsonData, null, 2)}`);

    if (jsonData !== null){
      createCard(userId, jsonData);

      toggleModal();
    }
  }, [jsonData])

  return (
    <View style={styles.container}>
      <View
        style={{
          flex:0.5,
          padding: 4,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: '#DE2924',
          borderRadius: 4,
          width:'100%'
        }}>
        <Text style={{ fontSize: 20, color: 'white' }}>Agregar Tarjeta</Text>
      </View>
      <View
        style={{
          flex:5,
          width:'90%',
          flexDirection:'column',
          marginTop:20,
        }}
      >
        <Text>Número de Tarjeta</Text>
        <View style={styles.inputView}>
          <Ionicons name="card" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder='1234 5678 9102 3456'
            maxLength={19}
            style={styles.input}
            keyboardType="numeric"
            value={numeroTarjetaFormateado}
            onChangeText={(text) => {
              const numerosSolo = text.replace(/\D/g, '');

              const formateado = numerosSolo.replace(/(\d{4})/g, '$1 ');

              setNumeroTarjetaFormateado(formateado);
              setNumeroTarjeta(numerosSolo);
            }}
          />
        </View>
        <Text>Nombre del Titular de La Tarjeta</Text>
        <View style={styles.inputView}>
          <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Maria Jose Hernández García"
            onChangeText={(text) => setNombreTitular(text)}
          />
        </View>
        <Text>Fecha de Expiración</Text>
        <View style={styles.inputView}>
          <Ionicons name="calendar-outline" size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="01/23"
            maxLength={5}
            value={fechaExpiracion}
            onChangeText={(text) => {
              if (text.length === 2 && !text.includes('/')) {
                text += '/';
              }
              setFechaExpiracion(text);
            }}
          />
        </View>
        <Text>CVV</Text>
        <View style={styles.inputView}>
            <Ionicons name="card" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.rowInput}
              keyboardType="numeric"
              placeholder="252"
              maxLength={3}
              onChangeText={(text) => setCVV(text)}
            />
        </View>
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
          style={styles.confirmarButton}
          onPress={handleConfirmar}
        >
          <Text style={{ fontSize:20, color:'white',}}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={100} color="#00FF00" />
            <Text style={{ fontSize: 24, textAlign: 'center' }}>Tarjeta Registrada</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => {
              toggleModal();
              navigation.goBack(); // Regresar a la pantalla anterior
            }}>
              <Text style={{ fontSize: 18, color: 'white' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  input: {
    flex:1,
  },
  icon: {
    marginRight: 5,
    marginTop:5,
  },
  inputView: {
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingBottom:8,
    marginBottom:25
  },
  rowInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  rowInput: {
    width:'40%',
  },
  confirmarButton: {
    width:250,
    height:50,
    borderRadius: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDC32F',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#DE2924',
    padding: 10,
    borderRadius: 10,
  },
});

export default AgregarTarjeta;
