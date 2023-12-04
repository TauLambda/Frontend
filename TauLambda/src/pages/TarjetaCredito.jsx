import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { readCardsByUserId } from '../services/cardService';
import { createHistory } from '../services/historyService';

const TarjetaCredito = ({ route, navigation }) => {
    const { carga } = route.params;
    const { monto } = route.params;
    const { tipoGas } = route.params;
    const { metodoPago } = route.params;

    const {ID_usuario} = route.params;
    console.log(ID_usuario)

    const [cardsData, setCardsData] = useState([]);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [jsonData, setJsonData] = useState(null);
    const [isModalVisible, setModalVisible] = React.useState(false);

    // Función para obtener las tarjetas de crédito del usuario
    const fetchData = async () => {
        try {
            readCardsByUserId(ID_usuario).then((data) => {
            setCardsData(data);
        });
        } catch (error) {
        console.error('Error al obtener las tarjetas:', error);
        }
    }

    // Función para obtener la fecha actual en el formato deseado
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

    // Función para mostrar u ocultar el modal de pago aprobado
    const toggleModal = () => {
        if (selectedCard) {
        setModalVisible(!isModalVisible);
        } else {
        alert('Debe seleccionar una tarjeta de crédito');
        }
    };

    // Obtener las tarjetas de crédito al cargar el componente
    useEffect(() => {
        fetchData();
    }, []);

    // Imprimir el objeto JSON en la consola cuando se actualice
    useEffect(() => {
        console.log(`TarjetaCredito: ${JSON.stringify(jsonData, null, 2)}`);

        if (jsonData !== null) {
        if (selectedCard) {
            setModalVisible(!isModalVisible);

            createHistory(ID_usuario, jsonData);
        } else {
            alert('Debe seleccionar una tarjeta de crédito');
        }
        }
    }, [jsonData]);

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
                navigation.navigate('AgregarTarjeta', {ID_usuario : ID_usuario})
            }}
            >
            <Ionicons name="add" size={24} color="black" />
            <Text>Agregar tarjeta nueva</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.card, {borderColor:'#ddd'}]}
            onPress={() => fetchData()}
            >
            <Ionicons name="refresh" size={24} color="black" />
            <Text>Recargar tarjetas</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={cardsData}
            keyExtractor={(item) => item.ID_tarjeta}
            renderItem={({ item }) => (
            <TouchableOpacity
                style={[
                styles.card,
                { borderColor: selectedCard === item.ID_tarjeta ? '#FDC32F' : '#ddd' },
                ]}
                onPress={() => setSelectedCard(item.ID_tarjeta)}
            >
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text>{item.Nombre}</Text>
                <Text>{`**** **** **** ${item.NumeroTarjeta.toString().substr(-4)}`}</Text>
                </View>
            </TouchableOpacity>
            )}
        />
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity style={styles.pagarButton} onPress={construirJSON}>
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
                navigation.navigate('Welcome', {ID_usuario : ID_usuario})
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
