import React,{useState} from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextComponent } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import Selector from "../components/Selector";

const SignIn = ({navigation}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(null)
    const [userType, setUserType] = useState("")

    const handleRegistrar = () => {
        // Construct the JSON object with the input field values
        const userData = {
        name: name,
        phone: phone,
        email: email,
        password: password,
        userType: userType,
        };
    
        // Log the JSON object for testing purposes
        console.log(userData);
    
        // You can perform further actions with the userData, such as sending it to a server
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
            />}
            value={name}
            onChangeText={(text) => setName(text)}/>

            <InputField  
            label={'Número de celular'}
            icon={<MaterialIcons
                    name="phone"
                    size={30}
                    color={"#e8a042"}
                    style={{ marginRight: 5 }}
            />}
            value={phone}
            onChangeText={(text) => setPhone(text)}/>

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

            <View>
                <Selector onSelect={(selectedValue) => setUserType(selectedValue)}/>
            </View>

            <TouchableOpacity
            onPress={handleRegistrar}
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
