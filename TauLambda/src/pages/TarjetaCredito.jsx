// Importar React y los componentes necesarios de React Native
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { readCardsByUserId } from '../services/cardService';
import { createHistory } from '../services/historyService';

// Componente para la pantalla de selección de tarjeta de crédito
const TarjetaCredito = ({ route, navigation }) => {
  // Obtener parámetros de la ruta
  const { carga } = route.params;
  const { monto } = route.params;
  const { tipoGas } = route.params;
  const { metodoPago } = route.params;

  // ID de usuario (marcador de posición temporal)
  const userId = 5;

  // Estados para almacenar datos de tarjetas, tarjeta seleccionada, datos JSON y visibilidad del modal
  const [cardsData, setCardsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Función para obtener las tarjetas asociadas al usuario
  const fetchData = async () => {
    try {
      readCardsByUserId(userId).then((data) => {
        setCardsData(data);
      });
    } catch (error) {
      console.error('Error al obtener las tarjetas:', error);
    }
  };

  // Función para obtener la fecha y hora actuales en un formato específico
  const obtenerFechaActual = () => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    const hora = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
    return `${año}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
  };

  // Función para construir el objeto JSON con los datos de la transacción
  const construirJSON = () => {
    const data = {
      Carga: carga,
      Monto: monto,
      TipoGas: tipoGas,
      MetodoPago: metodoPago,
      FechaTransaccion: obtenerFechaActual(),
      Estatus: 'Incompleto',
      ID_carro: 2,
      Bomba: 4,
      ID_estacion: 2,
    };

    setJsonData(data);
  };

  // Función para alternar la visibilidad del modal
  const toggleModal = () => {
    if (selectedCard) {
      setModalVisible(!isModalVisible);
    } else {
      alert('Debe seleccionar una tarjeta de crédito');
    }
  };

  // Efecto para obtener las tarjetas al cargar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Efecto para manejar la creación del historial y la visibilidad del modal al tener datos JSON
  useEffect(() => {
    console.log(`TarjetaCredito: ${JSON.stringify(jsonData, null, 2)}`);

    if (jsonData !== null) {
      if (selectedCard) {
        setModalVisible(!isModalVisible);

        // Crear historial con los datos de la transacción
        createHistory(userId, jsonData);
      } else {
        alert('Debe seleccionar una tarjeta de crédito');
      }
    }
  }, [jsonData]);

  // Estructura JSX para renderizar el componente
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DE2924',
          borderRadius: 4,
        }}
      >
        <Text style={{ fontSize: 20, color: 'white' }}>Realizar Compra</Text>
      </View>

      {/* Acciones para agregar tarjeta y recargar tarjetas */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity
          style={[styles.card, { borderColor: '#ddd' }]}
          onPress={() => {
            navigation.navigate('AgregarTarjeta');
          }}
        >
          <Ionicons name="add" size={24} color="black" />
          <Text>Agregar tarjeta nueva</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { borderColor: '#ddd' }]}
          onPress={() => fetchData()}
        >
          <Ionicons name="refresh" size={24} color="black" />
          <Text>Recargar tarjetas</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de tarjetas disponibles */}
      <FlatList
        data={cardsData}
        keyExtractor={(item) => item.ID_tarjeta.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                borderColor:
                  selectedCard === item.ID_tarjeta ? '#FDC32F' : '#ddd',
              },
            ]}
            onPress={() => setSelectedCard(item.ID_tarjeta)}
          >
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Text>{item.Nombre}</Text>
              <Text>{`**** **** **** ${item.NumeroTarjeta
                .toString()
                .substr(-4)}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Botón de pago */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={styles.pagarButton} onPress={construirJSON}>
          <Text style={{ fontSize: 20, color: 'white' }}>{`Pagar ${monto}`}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de éxito */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={100} color="#00FF00" />
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
              Pago Aprobado
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                toggleModal();
                navigation.navigate('Welcome');
              }}
            >
              <Text style={{ fontSize: 18, color: 'white' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
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

// Exportar el componente como la exportación predeterminada
export default TarjetaCredito;
