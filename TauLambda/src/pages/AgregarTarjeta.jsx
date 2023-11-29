// Importar React y los componentes necesarios de React Native
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createCard } from '../services/cardService';

// Componente para agregar una nueva tarjeta de crédito
const AgregarTarjeta = ({ navigation }) => {
  // Variables de estado para gestionar los campos de entrada y la visibilidad del modal
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [numeroTarjetaFormateado, setNumeroTarjetaFormateado] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCVV] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  // ID de usuario para el registro de la tarjeta (marcador de posición temporal)
  const userId = 5;

  // Función para alternar la visibilidad del modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Función para manejar la confirmación de agregar una nueva tarjeta
  const handleConfirmar = () => {
    // Eliminar espacios del número de tarjeta
    const numeroTarjetaSinEspacios = numeroTarjeta.replace(/\s/g, '');
    // Extraer el mes de la fecha de expiración
    const mes = parseInt(fechaExpiracion.substring(0, 2), 10);

    // Validar los campos de entrada
    if (numeroTarjeta && nombreTitular && fechaExpiracion && cvv) {
      if (
        numeroTarjetaSinEspacios.length === 16 &&
        mes >= 1 &&
        mes <= 12 &&
        cvv.length === 3
      ) {
        // Si la entrada es válida, crear un objeto JSON para la tarjeta
        const jsonTarjeta = {
          Nombre: nombreTitular,
          NumeroTarjeta: numeroTarjeta,
          Expiracion: fechaExpiracion,
          CVV: cvv,
        };

        // Establecer los datos JSON para su uso en useEffect
        setJsonData(jsonTarjeta);
      } else {
        // Mostrar una alerta de error para la entrada no válida
        Alert.alert('Error', 'Por favor, ingresa valores válidos.', [
          { text: 'OK' },
        ]);
      }
    } else {
      // Mostrar una alerta de error para la información faltante
      Alert.alert('Error', 'Todos los campos deben contener información.', [
        { text: 'OK' },
      ]);
    }
  };

  // useEffect para registrar los datos JSON y crear la tarjeta cuando los datos estén disponibles
  useEffect(() => {
    console.log(`AgregarTarjeta: ${JSON.stringify(jsonData, null, 2)}`);

    // Verificar si jsonData no es nulo
    if (jsonData !== null) {
      // Llamar a la función createCard con el ID de usuario y los datos de la tarjeta
      createCard(userId, jsonData);

      // Alternar el modal para mostrar el mensaje de éxito
      toggleModal();
    }
  }, [jsonData]);

  // Estructura JSX para renderizar el componente
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Agregar Tarjeta</Text>
      </View>

      {/* Sección del formulario */}
      <View style={styles.formContainer}>
        {/* Entrada de número de tarjeta */}
        <Text>Número de Tarjeta</Text>
        <View style={styles.inputView}>
          <Ionicons name="card" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="1234 5678 9102 3456"
            maxLength={19}
            style={styles.input}
            keyboardType="numeric"
            value={numeroTarjetaFormateado}
            onChangeText={(text) => {
              // Formatear el número de tarjeta con espacios y actualizar el estado
              const numerosSolo = text.replace(/\D/g, '');
              const formateado = numerosSolo.replace(/(\d{4})/g, '$1 ');
              setNumeroTarjetaFormateado(formateado);
              setNumeroTarjeta(numerosSolo);
            }}
          />
        </View>

        {/* Entrada de nombre del titular de la tarjeta */}
        <Text>Nombre del Titular de La Tarjeta</Text>
        <View style={styles.inputView}>
          <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Maria Jose Hernández García"
            onChangeText={(text) => setNombreTitular(text)}
          />
        </View>

        {/* Entrada de fecha de expiración */}
        <Text>Fecha de Expiración</Text>
        <View style={styles.inputView}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="01/23"
            maxLength={5}
            value={fechaExpiracion}
            onChangeText={(text) => {
              // Formatear la fecha de expiración como MM/YY y actualizar el estado
              if (text.length === 2 && !text.includes('/')) {
                text += '/';
              }
              setFechaExpiracion(text);
            }}
          />
        </View>

        {/* Entrada de CVV */}
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

      {/* Botón de confirmación */}
      <View style={styles.confirmButtonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmar}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
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
            <Ionicons
              name="checkmark-circle"
              size={100}
              color="#00FF00"
            />
            <Text style={styles.modalText}>Tarjeta Registrada</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                toggleModal();
                navigation.goBack(); // Regresar a la pantalla anterior
              }}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.5,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE2924',
    borderRadius: 4,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  formContainer: {
    flex: 5,
    width: '90%',
    flexDirection: 'column',
    marginTop: 20,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginRight: 5,
    marginTop: 5,
  },
  inputView: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  rowInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowInput: {
    width: '40%',
  },
  confirmButtonContainer: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: 250,
    height: 50,
    borderRadius: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDC32F',
  },
  confirmButtonText: {
    fontSize: 20,
    color: 'white',
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
  modalText: {
    fontSize: 24,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#DE2924',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

// Exportar el componente como la exportación predeterminada
export default AgregarTarjeta;
