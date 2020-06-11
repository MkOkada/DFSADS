import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Regform extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.teste}>Registre-se aqui</Text>
                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry/>
                <TextInput style={styles.input} placeholder="Confirme sua senha" secureTextEntry/>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.userBtn} onPress={() => alert("Login Works")}>
                        <Text style={styles.btnTxt}>Confirmar </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#c6c6c6',
    },
    teste: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    input: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },
    userBtn: {
        backgroundColor: "#FFD700",
        padding: 15,
        width: "45%"
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center'
    },
});