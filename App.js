/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


export default class HellowWorldApp extends Component {
  render() {
    let pic = {
      uri: "https://junaos.cat/static/img/junaosav.jpg"
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Image source={pic} style={{height: 200, width: 200}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
