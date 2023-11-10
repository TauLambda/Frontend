import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const TarjetaCredito = ({ route, navigation }) => {
  const { monto } = route.params;

  const DATA = [
    {
      id: '1',
      nombre: 'Jose Maria',
      numeroTarjeta: 1234567891023456,
      Expiracion: '12/20',
      CVV: 252,
    },
    {
      id: '2',
      nombre: 'Maria Jose',
      numeroTarjeta: 1234567891025634,
      Expiracion: '12/20',
      CVV: 252,
    },
  ];

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePago = () => {
    if (selectedCard) {
      // Realizar el pago y mostrar el modal de pago aprobado
      toggleModal();
    } else {
      // Mostrar un mensaje de error si no se selecciona una tarjeta
      alert('Debe seleccionar una tarjeta de crédito');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 15,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: '#DE2924',
          borderRadius: 4
        }}
      >
        <Text style={{ fontSize: 20, color: 'white' }}>Realizar Compra</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity
          style={[styles.card, {borderColor:'#ddd'}]}
          onPress={() => {
            navigation.navigate('AgregarTarjeta')
          }}
        >
          <Ionicons name="add" size={24} color="black" />
          <Text>Agregar tarjeta nueva</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { borderColor: selectedCard === item.id ? '#FDC32F' : '#ddd' },
            ]}
            onPress={() => setSelectedCard(item.id)}
          >
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
              <Text>{item.nombre}</Text>
              <Text>{`**** **** **** ${item.numeroTarjeta.toString().substr(-4)}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={styles.pagarButton} onPress={handlePago}>
          <Text style={{ fontSize: 20, color: 'white' }}>{`Pagar ${monto}`}</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={100} color="#00FF00" />
            <Text style={{ fontSize: 24, textAlign: 'center' }}>Pago Aprobado</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => {
              toggleModal();
              navigation.navigate('Welcome')
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
  },
  card: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  pagarButton: {
    width: '100%',
    height: 50,
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

export default TarjetaCredito;
