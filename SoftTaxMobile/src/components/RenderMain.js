import React, { Component } from "react";
import { Button, View ,Text, TouchableOpacity, StyleSheet} from "react-native";
import CustomHeader from './CustomHeader/CustomHeader'


export default class RenderMain extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader navigation= {this.props.navigation}/>
      </View>
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
