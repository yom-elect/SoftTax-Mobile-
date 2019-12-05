import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import AuthReg from './src/AuthReg';


export default class App extends Component {
  render() {
    return <AuthReg />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
