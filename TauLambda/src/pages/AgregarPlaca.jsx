import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const AgregarPlaca = ({ navigation }) => {
const [numeroPlaca, setNumeroPlaca] = useState('');
const [nombreTitular, setNombreTitular] = useState('');

const toggleModal = () => {
    setModalVisible(!isModalVisible);
};

const handleConfirmar = () => {
    if (numeroPlaca && nombreTitular && fechaExpiracion && cvv) {
    // Construir el JSON
    const jsonPlaca = {
        nombre: nombreTitular,
        numeroPlaca: numeroPlaca,
        };

    // Mostrar el modal
    toggleModal();

    } else {
    Alert.alert('Error', 'Todos los campos deben contener información.', [
        { text: 'OK' },
    ]);
    }
};

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
        <Text style={{ fontSize: 20, color: 'white' }}>Agregar Placa</Text>
    </View>
    <View
        style={{
        flex:5,
        width:'90%',
        flexDirection:'column',
        marginTop:20,
        }}
    >
        <Text>Número de Placa</Text>
        <View style={styles.inputView}>
        <Ionicons name="card" size={20} color="#666" style={styles.icon} />
        <TextInput
            placeholder='1234 5678 9102 3456'
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setNumeroPlaca(text)}
        />
        </View>
        <Text>Nombre del Titular de La Placa</Text>
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
            placeholder="12/20"
            onChangeText={(text) => setFechaExpiracion(text)}
        />
        </View>
        <Text>CVV</Text>
        <View style={styles.inputView}>
            <Ionicons name="card" size={20} color="#666" style={styles.icon} />
            <TextInput
            style={styles.rowInput}
            placeholder="252"
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
            <Text style={{ fontSize: 24, textAlign: 'center' }}>Placa Registrada</Text>
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

export default AgregarPlaca;
