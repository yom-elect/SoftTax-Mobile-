import React, { Component } from 'react';
import { Text,View, Button } from 'react-native';

class RaiseInfSec extends Component {
    static navigationOptions = {
      drawerLabel: 'RaiseInfSec',
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title="Go to Register"
        />
      );
    }
  }

export default RaiseInfSec;