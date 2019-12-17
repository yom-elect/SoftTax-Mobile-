import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text,Picker  } from 'react-native';
import { Block, theme,Button } from 'galio-framework';

const { width } = Dimensions.get('screen');
import Input from '../components/Input'
import {argonTheme} from '../constants/'


class Pro extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex style={styles.container}>
            <Block>
              <Text>Customer Search</Text>
            </Block>
          <Block flex row>
            <Text>TAX PAYER ID: </Text>
            <Input/>
          </Block>
          <Block flex row>
            <Text>Org Name: </Text>
            <Input/>
          </Block>
          <Block flex row>
            <Text>Phone Number: </Text>
            <Input/>
          </Block>
          <Block flex row>
            <Text>Industry: </Text>
            <Picker 
            style={styles.picker}
            selectedValue = "Select Division"
            onValueChange = {()=>console.log('changed')} >
              <Picker.Item label="Information Technology" value="IT"/>
              <Picker.Item label="Farming And Mining" value="Agric"/>
            </Picker>
          </Block>
          <Block flex row>
            <Text>Sector: </Text>
            <Picker  
            style={styles.picker}
            selectedValue = "Select Division"
            onValueChange = {()=>console.log('changed')}>
              <Picker.Item label="Information Technology" value="IT"/>
              <Picker.Item label="Farming And Mining" value="Agric"/>
            </Picker>
          </Block>
          <Button 
            style= {styles.button} 
            color= {argonTheme.COLORS.APP_COLOUR}
            onPress={() => this.props.navigation.navigate('Customer')} >
                    Search
            </Button>
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    picker: {
      width: 200,
    },
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});

export default Pro;
