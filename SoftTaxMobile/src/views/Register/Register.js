import React, { Component } from "react";
import { Button, View ,Text, TouchableOpacity, StyleSheet} from "react-native";

export default class Register extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <TouchableOpacity  onPress={()=> navigation.navigate('Login')}>
            <Text>skip if you have an account ?</Text>
        </TouchableOpacity>
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
