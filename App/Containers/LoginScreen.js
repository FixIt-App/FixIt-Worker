import React from 'react'
import {
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
  AsyncStorage
} from 'react-native'
import { Images } from '../Themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import API from '../Services/Api'

// Styles
import styles from './Styles/LoginScreenStyles'

export default class LoginScreen extends React.Component {
  api = {}

  constructor (props) {
    super(props)
    this.username = ''
    this.password = ''
    this.state = {
      username: 'reactnative@infinite.red',
      password: 'password'
    }

    this.api = API.create()
  }

  signIn = () => {
    const { username, password } = this.state
    const token = this.api.getToken(username, password)
      .then((data) => {
        console.log(data)
        if (data.status == 200) {
          ToastAndroid.show('Login Successful' + token, ToastAndroid.SHORT)
          AsyncStorage.setItem('token', token)
          this.openWorksList()
        } else {
          ToastAndroid.show('Credenciales incorrectas. Inténtalo de nuevo.', ToastAndroid.SHORT)
        }
      })
      .catch((error) => {
        ToastAndroid.show('Error. por favor intenta más tarde.', ToastAndroid.SHORT)
        console.log(error)
      })
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  openWorksList = () => {
    this.props.navigation.navigate('WorksScreen')
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
              ref='username'
              style={styles.input}
              placeholder='Ingresa tu correo'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.handleChangeUsername}
            />

            <TextInput
              ref='password'
              style={styles.input}
              placeholder='Ingresa tu Contraseña'
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.handleChangePassword}
            />
            <View style={styles.signinContainer}>
              <Button
                title='Inicia Sesión'
                onPress={this.signIn}
                color='#12A19B'
                accessibilityLabel='Inicia sesión con tu usuario y contraseña'
              />
            </View>
          </View>
        </View>
        <DevscreensButton />
      </KeyboardAwareScrollView>
    )
  }
}
