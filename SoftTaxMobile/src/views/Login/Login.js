import React, { Component } from "react";
import { Button, View ,Text, TouchableOpacity, StyleSheet} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("MainPage")}
        />
        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Register')}>
            <Text>Don't have an account ?</Text>
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
