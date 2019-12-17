import React from "react";
import { ScrollView, StyleSheet, Dimensions, Picker,Modal  } from "react-native";
import { withNavigation } from 'react-navigation';
// Galio components
import { Block, Text, Button } from "galio-framework";
// Argon themed components

import {argonTheme} from '../../constants/'

const { width } = Dimensions.get("screen");

class RaiseAssessment extends React.Component {
  

  render() {
      const {navigation, close} = this.props
    return (
        <Modal visible ={this.props.visible} animationType="slide">
         <Block flex style={styles.blockContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Block flex>
            <Text>Raise Assessment for Year 2013</Text>
          </Block>
          <Block style={styles.inputContainer}>
            <Block flex row>
                <Text>Customer Category:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue = "Select Profession"
                    onValueChange = {()=>console.log('changed')} >
                        <Picker.Item label="INFORMAL SECTOR/ARTISANS" value="IT"/>
                        <Picker.Item label="LAWYERS" value="Agric"/>
                </Picker>
                <Picker
                    style={styles.picker}
                    selectedValue = "Select Division"
                    onValueChange = {()=>console.log('changed')} >
                        <Picker.Item label="Rice Miller" value="IT"/>
                        <Picker.Item label="Cloth Weaver" value="Agric"/>
                </Picker>
            </Block>
            <Block row style={styles.buttonContainer}>
                <Button style={styles.button} flex onPress={close} color ={argonTheme.COLORS.ERROR}>
                        Cancel
                </Button>

                <Button style={styles.button} onPress={()=>
                    navigation.navigate('Customer')} color ={argonTheme.COLORS.APP_COLOUR}>
                        Fill Assessment
                </Button>
            </Block>
          </Block>
        </ScrollView>
      </Block>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    blockContainer: {
        flex :1,
        alignItems:'center',
        padding: 10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems:'flex-start',
    },
    picker: {
      width: 150,
    },
    buttonContainer: {
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
    button :{
        width: 100
    }
});

export default withNavigation(RaiseAssessment) ;