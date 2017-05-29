/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class FixItWorkerApp extends Component {

  constructor(props){
    super(props)
    this.username = ''
    this.password = ''
  }

  signIn(){
    fetch('https://gleis.fix-it.com.co/api/token-auth/',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: 'david', password: 'fixit1234'})
      })
      .then((response) => response.json())
      .then((responseJson) => {
        ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
      })
      .catch((error)=>{
        ToastAndroid.show('Credenciales incorrectas. Inténtalo de nuevo.', ToastAndroid.SHORT);
      })
  }

  render() {
    const image = 'https://test-fixit.s3.amazonaws.com/static/fix-it.jpg'
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: image}}/>
          
          <TextInput
            style={styles.input}
            placeholder= 'Ingresa tu correo'
          />
          
          <TextInput
            style = {styles.input}
            placeholder = 'Ingresa tu Contraseña'
            secureTextEntry = {true}
          />
          <View style={styles.signinContainer}>
            <Button 
              title="Inicia Sesión" 
              style={styles.signin}
              onPress={this.signIn}
              color='#12A19B'
              accessibilityLabel="Inicia sesión con tu usuario y contraseña"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  image: {
    width: 170,
    height: 190
  },
  input: {
    height: 60,
    width: 200,
  },
  signinContainer: {
    width: 170,
    height: 200,
    paddingTop: 30,
  },
  signin: {
    backgroundColor: '#12A19B',
    width: 170,
  }
});

AppRegistry.registerComponent('FixItWorkerApp', () => FixItWorkerApp);
