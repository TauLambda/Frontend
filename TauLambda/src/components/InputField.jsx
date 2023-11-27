import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function InputField({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, value, onChangeText }) {

    return (
        <View
            style={{ flexDirection: "row", paddingBottom: 0, marginBottom: 25 }}
        >
            {icon}
            {inputType === 'password' ? (
                <TextInput
                    placeholder={label}
                    keyboardType={keyboardType}
                    style={{
                        backgroundColor: "#ccc",
                        flex: 1,
                        paddingVertical: 0,
                        borderRadius: 45,
                        paddingLeft: 10,
                    }}
                    secureTextEntry={true}
                    value={value}
                    onChangeText={onChangeText}
                />
            ) : (
                <TextInput
                    placeholder={label}
                    keyboardType={keyboardType}
                    style={{
                        backgroundColor: "#ccc",
                        flex: 1,
                        paddingVertical: 0,
                        borderRadius: 45,
                        paddingLeft: 10,
                    }}
                    value={value}
                    onChangeText={onChangeText}
                />
            )}

            {fieldButtonLabel && fieldButtonFunction && (
                <TouchableOpacity onPress={fieldButtonFunction}>
                    <Text
                        style={{
                            color: "#de2924",
                            fontWeight: "700",
                            paddingTop: 5,
                            paddingLeft: 5,
                        }}
                    >
                        {fieldButtonLabel}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}
