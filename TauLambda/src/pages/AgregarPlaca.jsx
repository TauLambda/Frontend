import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputField from '../components/InputField';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createCar } from '../services/addCarService';

const AgregarPlaca = ({ route, navigation }) => {
    // Estado para almacenar el número de placa y el modelo del carro
    const [numeroPlaca, setNumeroPlaca] = useState('');
    const [modeloCarro, setModeloCarro] = useState('');
    const {ID_usuario} = route.params;
    const [isModalVisible, setModalVisible] = useState(false);

    // Función para mostrar u ocultar el modal
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // Función para manejar el evento de confirmar
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
            createCar(modeloCarro, numeroPlaca, ID_usuario)
            toggleModal();

        } else {
            // Mostrar una alerta de error si los campos están vacíos
            Alert.alert('Error', 'Todos los campos deben contener información.', [
                { text: 'OK' },
            ]);
        }
    };

    // Renderizar el componente
    return (
        <View style={styles.container}>
            {/* Encabezado */}
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
            {/* Formulario */}
            <View
                style={{
                    flex:5,
                    width:'90%',
                    flexDirection:'column',
                    marginTop:20,
                }}
            >
                {/* Campo de entrada para el modelo del carro */}
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

                {/* Campo de entrada para la placa del carro */}
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
            {/* Botón de confirmar */}
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

            {/* Modal para mostrar la confirmación */}
            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Ionicons name="checkmark-circle" size={100} color="#00FF00" />
                        <Text style={{ fontSize: 24, textAlign: 'center' }}>Placa Registrada</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => {
                            handleConfirmar
                            toggleModal();
                            navigation.navigate("Welcome", {ID_usuario: ID_usuario}); // Regresar a la pantalla anterior
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
