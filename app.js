import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

export default class FixItWorkerApp extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    flexWrap: 'wrap',
    height: 100,
    width: 100
  }
})

AppRegistry.registerComponent('FixItWorkerApp', () => FixItWorkerApp)
