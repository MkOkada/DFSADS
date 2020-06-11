import React, { Component, useState } from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {recarga: 0, saldo: 1, resultado: 0}
        this.addSaldo = this.addSaldo.bind(this)
    }

     addSaldo() {
         let res = this.state.saldo * this.state.recarga

         let s = this.state
         s.resultado = res
         this.setState(s)
     }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.teste}>Seu saldo: {this.state.resultado} </Text>
                <TextInput style={styles.input} 
                keyboardType = 'numeric' 
                placeholder="Recarregue seu saldo aqui:"
                style={styles.input} onChangeText={(saldo)=>{this.setState({saldo})}}
                style={styles.input} onChangeText={(recarga)=>{this.setState({recarga})}}/>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.userBtn} onPress={this.addSaldo}>
                        <Text style={styles.btnTxt}>Recarregar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer2}>
                    <TouchableOpacity style={styles.userBtn2} onPress={this.addSaldo}>
                        <Text style={styles.btnTxt2}>Adicionar meio de pagamento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#c6c6c6',
        flex: 1,
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
        width: "90%",
        padding: 5,
    },
    userBtn: {
        backgroundColor: "#FFD700",
        flex: 1,
        padding: 10,
        width: "35%"
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center'
    },
    btnContainer2: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        padding: 5,
        backgroundColor: "#c6c6c6",
    },
    userBtn2: {
            backgroundColor: "#c6c6c6",
            flex: 1,
            padding: 10,
            width: "35%"
    },
    btnTxt2: {
        fontSize: 14,
        textAlign: 'center'
    },
});