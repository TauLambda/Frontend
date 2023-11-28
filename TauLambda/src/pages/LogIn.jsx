import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import { readUserByEmail } from "../services/loginService";

const LogIn = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <View
        style={{
        flex: 1,
        justifyContent: "center",
        justifyContent: "center",
        margin: 15
        }}
        >
            <View style={{ alignItems: "center" }}>
                <Image
                style={{ width: 300, height: 300 }}
                source={require("../images/OXXOGAS.png")}
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
            >
                Ingresar a la cuenta
            </Text>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <InputField  
                label={'Correo electrónico'}
                icon={<MaterialIcons
                    name="alternate-email"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
                />}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}/>

                <InputField  
                    label={'Contraseña'}
                    icon={<MaterialIcons
                            name="lock"
                            size={30}
                            color={"#e8a042"}
                            style={{ marginRight: 5 }}
                    />}
                    inputType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}/>
                    
            </View>
            <TouchableOpacity
            onPress={async () => {
                try {
                    const userData = await readUserByEmail(email, password);
                    navigation.navigate('Welcome', {idUser : userData.ID_usuario});
                    console.log({idUser : userData.ID_usuario})
                } catch (error) {
                    // Handle error (e.g., show an error message)
                    console.error('Login failed:', error.message);
                }
            }}
            
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
                Ingresar
                </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent: 'center', marginBottom:5 }}>
                <Text >¿Nuevo en la app?</Text>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Signin');
                }}
                >
                    <Text 
                    style={{color:'#de2924', fontWeight: '700', fontSize:17}}> Registrarse</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};


export default LogIn;
