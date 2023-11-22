// Import necessary dependencies
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import Selector from "../components/Selector"; 

// ProfileScreen component
const PerfilParticular = ({navigation}) => {
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
        marginBottom: 30,
        paddingLeft: 10,
        }}
        >Registrarse
        </Text>

        <ScrollView style={{ marginLeft: 10, marginRight: 10, flex:2}}>

            <View>
                <MaterialIcons
                        name="emoji-emotions"
                        size={30}
                        color={"#e8a042"}
                        style={{ marginRight: 5 }}
                />
                <Text>Nombre Completo</Text>
            </View>
            
            <View>
                <MaterialIcons
                        name="phone"
                        size={30}
                        color={"#e8a042"}
                        style={{ marginRight: 5 }}
                />
                <Text>
                    Número de celular
                </Text>
            </View>

            <View>
                <MaterialIcons
                        name="alternate-email"
                        size={30}
                        color={"#e8a042"}
                        style={{ marginRight: 5 }}
                />
                <Text>
                    Correo electrónico
                </Text>
            </View>

            <View>
                <Selector />
            </View>

            <TouchableOpacity
            onPress={() => navigation.goBack()}
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
            Registrarse
            </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent: 'center', marginBottom:5 }}>
            <Text >¿Ya tiene una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text 
            style={{color:'#de2924', fontWeight: '700', fontSize:17}}> Ingresar </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>

    </View>
);
};

export default PerfilParticular;