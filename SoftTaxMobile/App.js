import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './src/navigation/MainApp';
import { Block, GalioProvider } from 'galio-framework';


export default class App extends Component {
  render() {
    return (
      <Block flex>
        <MainApp />
      </Block>
       );
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
