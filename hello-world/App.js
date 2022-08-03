import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  Button,
  ScrollView,
} from "react-native";

//import the screens

import Start from './components/Start';
import Chat from './components/Chat';

// import react nav gesture handler
import 'react-native-gesture-handler';

//import react nav
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class HelloWorld extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = { text: ''};
 // }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}