import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@reacr-navigation/stack';

import Home from  './src/pages/home';
import Login from  './src/pages/login';
import Carteira from  './src/pages/carteira';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "Home" component = {Home}/>
                <Stack.Screen name = "Carteira" component = {Carteira}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 
