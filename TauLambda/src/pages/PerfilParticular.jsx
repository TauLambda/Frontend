// Import necessary dependencies
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import Selector from "../components/Selector"; 
import { useRoute } from '@react-navigation/native';

// ProfileScreen component
const PerfilParticular = ({route, navigation}) => {
    console.log(route)
    const { idUser } = route.params;
    console.log(idUser)

    userData = {
        "ID_usuario": 3,
        "Nombre": "Usuario Tres",
        "Contrasena": "contrasena5",
        "Correo": "correo5@gmail.com",
        "Telefono": "5512345672",
        "TipoUsuario": "Flotilla",
        "Cashback": 100
    }

    carData = [
        {
            "ID_carro": 8,
            "Placa": "XWD-005-1",
            "Modelo": "NULL",
            "ID_usuario": 5
        },
        {
            "ID_carro": 9,
            "Placa": "XWD-005-2",
            "Modelo": "NULL",
            "ID_usuario": 5
        },
        {
            "ID_carro": 35,
            "Placa": "NKR9359",
            "Modelo": "TSURU tuneado",
            "ID_usuario": 5
        }
    ]
return (
<View
    style={{
    flex: 1,
    justifyContent: "center",
    justifyContent: "center",
    margin: 15
    }}
    >
        <View style={{ justifyContent: "center", flex:0.3,}}>
            <Image
            style={{ 
            width:'100%',
            height:undefined,
            aspectRatio:1,
            resizeMode:'contain',
            }}
            source={require("../images/OXXOGAS2.png")}
            />
        </View>

        <Text
        style={{
        fontSize: 28,
        fontWeight: "500",
        color: "#9b101a",
        marginBottom: 10,
        paddingLeft: 10,
        fontWeight:"bold"
        }}
        >Perfil de usuario
        </Text>

        <ScrollView style={{ marginLeft: 10, marginRight: 10, flex:2}}>

            <View style={{marginVertical:10}}>
                <Text style={{ fontWeight: "bold", fontSize:16, marginBottom: 5}}>Nombre Completo</Text>
                <View style={{flexDirection: "row"}}>
                    <MaterialIcons
                            name="emoji-emotions"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5}}
                    />
                    <Text style={{textAlignVertical:"center"}}>{userData.Nombre}</Text>
                </View>         
            </View>

            <View style={{marginVertical:10}}>
                <Text style={{ fontWeight: "bold", fontSize:16, marginBottom: 5}}>Número de celular</Text>
                <View style={{flexDirection: "row"}}>
                    <MaterialIcons
                            name="phone"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5}}
                    />
                    <Text style={{textAlignVertical:"center"}}>{userData.Telefono}</Text>
                </View>         
            </View>

            <View style={{marginVertical:10}}>
                <Text style={{ fontWeight: "bold", fontSize:16, marginBottom: 5}}>Correo Electrónico</Text>
                <View style={{flexDirection: "row"}}>
                    <MaterialIcons
                            name="alternate-email"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5}}
                    />
                    <Text style={{textAlignVertical:"center"}}>{userData.Correo}</Text>
                </View>         
            </View>

            <View style={{marginVertical:10}}>
                <Text style={{ fontWeight: "bold", fontSize:16, marginBottom: 5}}>Tipo de Usuario </Text>
                <View style={{flexDirection: "row"}}>
                    <MaterialIcons
                            name="group"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5}}
                    />
                    <Text style={{textAlignVertical:"center"}}>{userData.TipoUsuario}</Text>
                </View>         
            </View>
            <View style={{marginVertical:10}}>
                <Text style={{ fontWeight: "bold", fontSize:16, marginBottom: 5}}>Cashback </Text>
                <View style={{flexDirection: "row"}}>
                    <MaterialIcons
                            name="attach-money"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5}}
                    />
                    <Text style={{textAlignVertical:"center"}}>{userData.Cashback}</Text>
                </View>         
            </View>
            <View style={{marginVertical:10}}>
                <Text style={{ fontWeight: "bold", fontSize:16, marginBottom: 5}}>Carro </Text>

                {carData.map((car,index) => (
                    <View style={{flexDirection: "row", marginVertical: 5}}>
                    <MaterialIcons
                            name="directions-car"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5}}
                    />
                    <View key={index}>
                        <Text style={{textAlignVertical:"center", fontWeight: "bold"}}>Modelo: </Text>
                        {car.Modelo}
                        <Text style={{textAlignVertical:"center"}}>Placa: </Text>
                        {car.Placa}
                    </View>
                </View>
                ))}            
            </View>

        </ScrollView>

    </View>
);
};

export default PerfilParticular;