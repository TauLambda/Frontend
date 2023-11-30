import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import InputField from '../components/InputField';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AgregarPlaca = ({ route, navigation }) => {
const [numeroPlaca, setNumeroPlaca] = useState('');
const [modeloCarro, setModeloCarro] = useState('');
const {ID_usuario} = route.params;
const [isModalVisible, setModalVisible] = useState(false);

const toggleModal = () => {
    setModalVisible(!isModalVisible);
};

const handleConfirmar = () => {
    if (numeroPlaca && modeloCarro) {
        // Construir el JSON
        const jsonPlaca = {
            Placa: numeroPlaca,
            Modelo: modeloCarro,
            ID_usuario: ID_usuario
        };

        console.log(jsonPlaca)

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
        <Text style={{ fontSize: 20, color: 'white' }}>Agregar Coche</Text>
    </View>
    <View
        style={{
        flex:5,
        width:'90%',
        flexDirection:'column',
        marginTop:20,
        }}
    >
        <InputField  
            label={'Modelo del carro'}
            icon={<MaterialIcons
                    name="directions-car"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}
            value={modeloCarro}
            onChangeText={(text) => setModeloCarro(text)}/>

            <InputField  
            label={'Placa del carro'}
            icon={<MaterialIcons
                    name="call-to-action"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}
            value={numeroPlaca}
            onChangeText={(text) => setNumeroPlaca(text)}/>
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
                handleConfirmar
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
