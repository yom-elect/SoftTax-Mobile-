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
        <Block flex>
            <Block>
              <Text style={styles.search}>Customer Search</Text>
            </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:20,}}>TAX PAYER ID: </Text>
            <Input style={styles.input}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:45,}}>Org Name: </Text>
            <Input style={styles.input}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:18,}}>Phone Number: </Text>
            <Input style={styles.input}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text>Industry: </Text>
            <Picker 
            style={styles.picker}
            selectedValue = "Select Division"
            onValueChange = {()=>console.log('changed')} >
              <Picker.Item label="Information Technology" value="IT"/>
              <Picker.Item label="Farming And Mining" value="Agric"/>
            </Picker>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{marginRight:10}}>Sector: </Text>
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
            color= {"#faef23"} 
            textStyle={{ color: "#4d4d4d" }}
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
    picker: {
      width: 200,
      marginTop:"-5%",
      marginLeft:60
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
  search:{
    paddingTop:10,
    paddingBottom:20,
  },
  input: {
    marginTop:"-10%",
    paddingTop:'4%'
  },
  detail:{
    marginBottom:15,
    marginTop:15
  }
});

export default Pro;
