import React from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import { Images } from '../Themes'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {

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

  render () {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <View style={styles.section} >
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
                onPress={this.signIn}
                color='#12A19B'
                accessibilityLabel="Inicia sesión con tu usuario y contraseña"
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
