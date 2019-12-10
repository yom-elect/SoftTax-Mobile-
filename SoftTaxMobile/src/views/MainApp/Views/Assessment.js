import React, { Component } from 'react';
import { Text,View , Button} from 'react-native';
import RenderMain  from '../../../components/RenderMain'
import  CustomHeader from '../../../components/CustomHeader/CustomHeader'

class Assessment extends Component {
    static navigationOptions = {
      drawerLabel: 'Assessment',
    };
  
    render() {
      return (
        <View>
          <CustomHeader navigation= {this.props.navigation}/>
          <RenderMain navigation = {this.props.navigation}/>
          <Button
          onPress={() => this.props.navigation.navigate('AssignList')}
          title="Go to Assigned List"
        />
        </View>
        
      );
    }
  }

export default Assessment;