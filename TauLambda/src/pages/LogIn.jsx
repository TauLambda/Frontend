import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SvgUri } from 'react-native-svg';


const LogIn = ({navigation}) => {
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
                        >Log In
                        </Text>
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <View
                                style={{ flexDirection: "row", paddingBottom: 0, marginBottom: 25 }}
                                >
                                        <MaterialIcons
                                        name="alternate-email"
                                        size={30}
                                        color={"#e8a042"}
                                        style={{ marginRight: 5 }}
                                        />
                                        <TextInput
                                        placeholder="Email ID"
                                        style={{
                                        backgroundColor: "#ccc",
                                        flex: 1,
                                        paddingVertical: 0,
                                        borderRadius: 45,
                                        paddingLeft: 10,
                                        }}
                                        keyboardType="email-address"
                                        />
                                </View>
                                <View
                                style={{ flexDirection: "row", paddingBottom: 0, marginBottom: 25 }}
                                >
                                        <MaterialIcons
                                        name="lock"
                                        size={30}
                                        color={"#e8a042"}
                                        style={{ marginRight: 5 }}
                                        />
                                        <TextInput
                                        placeholder="Password"
                                        style={{
                                        backgroundColor: "#ccc",
                                        flex: 1,
                                        paddingVertical: 0,
                                        borderRadius: 45,
                                        paddingLeft: 10,
                                        }}
                                        secureTextEntry={true}
                                        />
                                </View>
                        </View>
                        <TouchableOpacity
                        onPress={() => {navigation.navigate('Welcome')}}
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
                                Log In
                                </Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent: 'center', marginBottom:5 }}>
                                <Text >New to the app?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                                        <Text
                                        style={{color:'#de2924', fontWeight: '700', fontSize:17}}> Register</Text>
                                </TouchableOpacity>
                        </View>
                </View>
        );
};


export default LogIn;
