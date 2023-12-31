import React, { useState, useEffect } from "react";
import { Avatar, Text } from '@ui-kitten/components'
import { ImageBackground, View, StyleSheet, TouchableOpacity, FlatList, Button,  Image } from 'react-native';

import AvatarImage from '../images/senora.png';
import WelcomeImage from '../images/Brands_People_OxxoGas_gasolinera.png';
import GasImage from '../images/Gas.png';
import HistorialImage from '../images/Historial.png';
import LogoImage from '../images/OXXOGAS2.png';

// Definición de los datos para la lista
const DATA = [
{
id: '1',
imagenUrl: GasImage,
texto: 'Carga',
},
{
id: '2',
imagenUrl: HistorialImage,
texto: 'Historial',
}
];

// Componente para cada elemento de la lista
const ListItem = ({ item, navigation, ID_usuario, Cashback }) => {
    const handlePress = () => {
        if (item.texto === 'Carga'){
        navigation.navigate('CargaParticular', {ID_usuario : ID_usuario});
        } else if (item.texto === 'Historial'){
        navigation.navigate('HistorialParticular', {ID_usuario : ID_usuario, Cashback : Cashback});
        }
    };

    return(
        <TouchableOpacity onPress={handlePress}>
        <View
            style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 20,
            borderColor: '#ddd',
            borderWidth: 2,
            height: 230,
            width: 160,
            }}
    >
            <View
            style={{
            flex: 2,
            padding: 10,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            margin: 4,
            }}
            >
            <Image
            source={item.imagenUrl}
            style={{
            width:'100%',
            height: '100%',
            resizeMode:'contain',
            }}
            />
            </View>
            <View
            style={{
            flex: 1,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            margin: 4,
            }}
            >
            <Text
            category='h4'
            >
            {item.texto}
            </Text>
            </View>
    </View>
    </TouchableOpacity>
    )
}

// Componente principal
const Welcome = ({route, navigation}) => {
    const {ID_usuario} = route.params;
    const {Nombre} = route.params;
    const {Contrasena} = route.params;
    const {Correo} = route.params;
    const {Telefono} = route.params;
    const {TipoUsuario} = route.params;
    const {Cashback} = route.params;

    const handlePress = () => {
        navigation.navigate('PerfilParticular', {
            ID_usuario: ID_usuario,
            Nombre: Nombre,
            Contrasena: Contrasena,
            Correo: Correo,
            Telefono: Telefono,
            TipoUsuario: TipoUsuario,
            Cashback: Cashback
        });
    }

    return (
        <View style={[
        styles.container,
        {
                flexDirection:'column'
        }
        ]}>
        <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                padding:4,
                }}
        >
                <View
                style={{
                width:140,
                height: 70,
                }}
                >
                <Image
                source={LogoImage}
                style={{
                width:'100%',
                height:'100%',
                resizeMode:'contain',
                }}
                />
                </View>
                <View
                style={{
                width: 70,
                height: 70,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                }}
                >
                <TouchableOpacity onPress={handlePress}>
                    <Avatar
                    source={AvatarImage}
                    ImageComponent={ImageBackground}
                    size='large'
                    style={{
                        borderColor:'#ddd',
                        borderWidth:1,
                    }}
                    />
                </TouchableOpacity>
                </View>
        </View>
        <View
                style={{
                flex:4,
                flexDirection:'row',
                justifyContent: 'center',
                alignItems:'center',
                padding:5,
                }}
        >
                <Image
                source={WelcomeImage}
                style={{
                height: '100%',
                width: '100%',
                borderRadius:15,
                }}
                />
        </View>
        <View
                style={{
                flex:4,
                flexDirection:'column',
                justifyContent: 'space-between',
                alignItems:'center',
                padding:5,
                }}
        >
                <View
                style={{
                flex: 1,
                }}
                >
                <Text
                category='h2'
                >Servicios</Text>
                </View>
                <View
                style={{
                        flexDirection:'row',
                        justifyContent: 'center',
                        alignItems:'center',
                }}
                >
                <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <ListItem item={item} navigation={navigation} ID_usuario={ID_usuario} Cashback={Cashback}/>}
                numColumns={2}
                columnWrapperStyle={{
                        justifyContent: 'space-between',
                }}
                />
                </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
});

export default Welcome;
