// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { userCars } from "../services/carsService";

// ProfileScreen component
const PerfilParticular = ({route, navigation}) => {

    const {ID_usuario} = route.params;
    const {Nombre} = route.params;
    const {Contrasena} = route.params;
    const {Correo} = route.params;
    const {Telefono} = route.params;
    const {TipoUsuario} = route.params;
    const {Cashback} = route.params;

    userData = {
        ID_usuario: ID_usuario,
        Nombre: Nombre,
        Contrasena: Contrasena,
        Correo: Correo,
        Telefono: Telefono,
        TipoUsuario: TipoUsuario,
        Cashback: Cashback
    }

    const [carsData, setCarsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const carsData = await userCars(ID_usuario);
                console.log(carsData);
                setCarsData(carsData);
            } catch (error) {
                console.error("Error fetching cars data:", error);
            }
        };

        fetchData();
    }, [ID_usuario]);

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

                {carsData.map((car, index) => (
                    <View style={{flexDirection: "row", marginVertical: 5}}>
                    <MaterialIcons
                            name="directions-car"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5}}
                    />
                    <View key={index}>
                        <Text style={{textAlignVertical:"center", fontWeight: "bold"}}>Modelo: </Text>
                        <Text> {car.Modelo} </Text>
                        
                        <Text style={{textAlignVertical:"center",  fontWeight: "bold"}}>Placa: </Text>
                        <Text> {car.Placa}</Text>
                    </View>
                </View>
                ))}  
                <TouchableOpacity
            onPress= {() => navigation.navigate('AgregarPlaca',
            {
                ID_usuario : ID_usuario
            })}
            style={{
            backgroundColor: "#de2924",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            }}
            >
                
                <Text
                style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 16,
                color: "#fff",
                }}
                >
                Añadir Carro
                </Text>
            </TouchableOpacity>          
            </View>

        </ScrollView>

    </View>
);
};

export default PerfilParticular;