import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LogIn = () => {
        return (
                <View
                style={{
                flex: 1,
                justifyContent: "center",
                justifyContent: "center",
                margin: 15,
                }}
                >
                        <View style={{ alignItems: "center" }}>
                                <Image
                                style={{ width: 300, height: 300 }}
                                source={require("../images/Brands_People_OXXOGAS_.png")}
                                />
                        </View>
                        <View style={{ alignItems: "center" }}>
                                <Image
                                style={{ width: 300, height: 300 }}
                                source={require("../images/Loing_image.png")}
                                />
                        </View>
                        <Text
                        style={{
                        fontSize: 28,
                        fontWeight: "500",
                        color: "#333",
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
                                        color={"#666"}
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
                                        color={"#666"}
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
                                        <TouchableOpacity onPress={() => {}}>
                                                <Text
                                                style={{
                                                color: "#AD40AF",
                                                fontWeight: "700",
                                                paddingTop: 5,
                                                paddingLeft: 5,
                                                }}
                                                >
                                                Forgot?
                                                </Text>
                                        </TouchableOpacity>
                                </View>
                        </View>
                        <TouchableOpacity
                        onPress={() => {}}
                        style={{
                        backgroundColor: "#AD40AF",
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
                                <TouchableOpacity onPress={() => {}}>
                                        <Text style={{color:'#AD40AF', fontWeight: '700', fontSize:17}}> Register</Text>
                                </TouchableOpacity>
                        </View>
                </View>
        );
};

export default LogIn;
