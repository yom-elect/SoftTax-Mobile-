import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text,  } from 'react-native';
import { Block, theme,Button } from 'galio-framework';

const { width } = Dimensions.get('screen');
import Input from '../components/Input'
import {argonTheme} from '../constants/'


class Home extends React.Component {
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
            <Text style={{paddingRight:15,}}>TAX PAYER ID: </Text>
            <Input style={styles.input}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:20,}}>Other Names: </Text>
            <Input style={styles.input}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:45,}}>Surname: </Text>
            <Input style={styles.input}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:65,}}>Email: </Text>
            <Input style={styles.input}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:8,}}>Phone Number: </Text>
            <Input style={styles.input}/>
          </Block>
          <Button style= {styles.button}
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
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 3,
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
    paddingBottom:20
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

export default Home;
