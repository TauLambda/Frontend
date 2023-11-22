import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextComponent } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import Selector from "../components/Selector";

const SignIn = ({navigation}) => {
    const construirJSON = () => {
        if (selectedService && selectedPayment) {
        const nombre = parseString(monto);
        const placa = parseString(litros);
    
        if (!isNaN(montoNum) && !isNaN(litrosNum)) {
            const data = {
            Carga: litrosNum.toFixed(2),
            Monto: montoNum.toFixed(2),
            TipoGas: selectedService,
            MetodoPago: selectedPayment,
            FechaTransaccion: obtenerFechaActual(),
            };
            setJsonData(data);
    
            console.log(jsonData);
        } else {
            alertaMontoLitros();
        }
        } else {
        alertaServicioPago();
        }
    };

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

        <InputField  
            label={'Nombre completo'}
            icon={<MaterialIcons
                    name="emoji-emotions"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}/>

            <InputField  
            label={'Número de celular'}
            icon={<MaterialIcons
                    name="phone"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}/>

            <InputField  
            label={'Correo electrónico'}
            icon={<MaterialIcons
                    name="alternate-email"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}
            keyboardType="email-address"/>

            <InputField  
            label={'Placa de automóvil'}
            icon={<MaterialIcons
                    name="web-asset"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}
            />
            
            <InputField  
            label={'Placa de automóvil'}
            icon={<MaterialIcons
                    name="web-asset"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}
            />

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


export default SignIn;
