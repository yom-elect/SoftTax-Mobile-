import React, { Component } from 'react';
import { Text,View,Button } from 'react-native';

class AssignList extends Component {
    static navigationOptions = {
      drawerLabel: 'AssignList',
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('RaiseInfSec')}
          title="Go to Assigned List"
        />
      );
    }
  }

export default AssignList;