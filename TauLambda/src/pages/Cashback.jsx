import { StyleSheet, Text, TouchableOpacity, View, Modal, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createHistory } from '../services/historyService';

const Cashback = ({ route, navigation }) => {
    const { carga } = route.params;
    const { monto } = route.params;
    const { tipoGas } = route.params;
    const { metodoPago } = route.params;

    const [jsonData, setJsonData] = useState(null);
    const [cashback, setCashback] = useState(300.59);
    const [isModalVisible, setModalVisible] = useState(false);

    const userId = 5;

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

    const toggleModal = () => {
        if (monto > cashback) {
        Alert.alert('Saldo Insuficiente', 'No tienes suficiente cashback para realizar esta transacción.');
        } else {
        setModalVisible(!isModalVisible);
        }
    };

    useEffect(() => {
        console.log(`Cashback: ${JSON.stringify(jsonData, null, 2)}`);

        if (jsonData !== null) {
        if (monto > cashback) {
            Alert.alert('Saldo Insuficiente', 'No tienes suficiente cashback para realizar esta transacción.');
        } else {
            createHistory(userId, jsonData);

            setModalVisible(!isModalVisible);
        }
        }
    }, [jsonData])

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{ fontSize:20,color:'white', }}>Cashback</Text>
        </View>
        <View style={styles.body}>
            <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontSize:20, }}>Cashback Almacenado</Text>
            <Text style={{ fontSize:60, fontWeight:'600'}}>{`$${cashback}`}</Text>
            </View>
            <Ionicons name="cash-outline" size={120} color="#666" style={{marginTop:30,}}/>
        </View>
        <View style={{flex:0.5, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
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
                navigation.navigate('Welcome')
                }}>
                <Text style={{ fontSize: 18, color: 'white' }}>Cerrar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
        </View>
    )
}

export default Cashback

const styles = StyleSheet.create({
container: {
    flex:1,
    padding:20,
    flexDirection:'column',
},
header: {
    flex:0.5,
    padding:4,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DE2924',
    borderRadius:4,
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
body:{
    flex:5,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
},
closeButton: {
    marginTop: 20,
    backgroundColor: '#DE2924',
    padding: 10,
    borderRadius: 10,
},
});