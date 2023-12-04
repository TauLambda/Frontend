// Importar los módulos y componentes necesarios
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import { readUserByEmail } from "../services/loginService";

// Definición del componente LogIn
const LogIn = ({ navigation }) => {
// Variables de estado para el correo electrónico y la contraseña
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
    // Vista del contenedor principal
    <View
    style={{
        flex: 1,
        justifyContent: "center",
        margin: 15,
    }}
    >
    {/* Logo */}
    <View style={{ alignItems: "center" }}>
        <Image
        style={{ width: 300, height: 300 }}
        source={require("../images/OXXOGAS.png")}
        />
    </View>

    {/* Título */}
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

    {/* Campos de entrada para el correo electrónico y la contraseña */}
    <View style={{ marginLeft: 10, marginRight: 10 }}>
        {/* Campo de entrada para el correo electrónico */}
        <InputField
        label={"Correo electrónico"}
        icon={
            <MaterialIcons
            name="alternate-email"
            size={30}
            color={"#e8a042"}
            style={{ marginRight: 5 }}
            />
        }
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        {/* Campo de entrada para la contraseña */}
        <InputField
        label={"Contraseña"}
        icon={
            <MaterialIcons
            name="lock"
            size={30}
            color={"#e8a042"}
            style={{ marginRight: 5 }}
            />
        }
        inputType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        />
    </View>

    {/* Botón de inicio de sesión */}
    <TouchableOpacity
        onPress={async () => {
        try {
            const userData = await readUserByEmail(email, password);
            navigation.navigate("Welcome", {
            ID_usuario: userData.ID_usuario,
            Nombre: userData.Nombre,
            Contrasena: userData.Contrasena,
            Correo: userData.Correo,
            Telefono: userData.Telefono,
            TipoUsuario: userData.TipoUsuario,
            Cashback: userData.Cashback,
            });
        } catch (error) {
            // Manejar el error de inicio de sesión
            console.error("Error en el inicio de sesión:", error.message);
        }
        }}
        style={{
        backgroundColor: "#de2924",
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        }}
    >
        {/* Texto del botón de inicio de sesión */}
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

    {/* Enlace de registro */}
    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 5 }}>
        <Text>¿Nuevo en la app?</Text>
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("Signin");
        }}
        >
        <Text style={{ color: "#de2924", fontWeight: "700", fontSize: 17 }}>
            {" "}
            Registrarse
        </Text>
        </TouchableOpacity>
    </View>
    </View>
);
};

// Exportar el componente LogIn
export default LogIn;
