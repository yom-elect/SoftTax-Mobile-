import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text,ActivityIndicator,Alert } from 'react-native';
import { Block, theme,Button } from 'galio-framework';

const { width } = Dimensions.get('screen');
import Input from '../components/Input'
import {argonTheme} from '../constants/'
import {connect} from 'react-redux'
import {searchTaxPayer} from '../redux/actions/SearchAction'


class Home extends React.Component {
  state = {
    individualQuery:{
      taxPayerId : '',
      surName: '',
      otherNames : '',
      email : '',
      phoneNumber : ''
    },

  }

  onQueryHandler = (input, type)=>{
    const  {individualQuery} = this.state
      const individualQueryForm = {
        ...individualQuery,
        [type]:input
      }
      this.setState({individualQuery:individualQueryForm})

  }

  onSearchHandler = async ()=>{
    const {navigation, error, isLoading, userData, onSearch} = this.props
    const {individualQuery} = this.state

    try {
      
      await onSearch(individualQuery)
      
      if (!isLoading && userData){
        //console.log(userData)
        navigation.navigate('Customer' , {user:userData})
      }else {
        Alert.alert('An Error Occurred', `${error}`, [{text: 'okay'}])
      }

    }catch (err) {
        console.log(err)
    }
  }


  renderArticles = () => {
    const {isLoading} = this.props
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
            <Input style={styles.input} onChangeText={(input)=>this.onQueryHandler(input,'taxPayerId')}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:20,}}>Other Names: </Text>
            <Input style={styles.input} onChangeText={(input)=>this.onQueryHandler(input,'otherNames')}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:45,}}>Surname: </Text>
            <Input style={styles.input} onChangeText={(input)=>this.onQueryHandler(input,'surName')}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:65,}}>Email: </Text>
            <Input style={styles.input} onChangeText={(input)=>this.onQueryHandler(input, 'email')}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:8,}}>Phone Number: </Text>
            <Input style={styles.input} onChangeText={(input)=>this.onQueryHandler(input, 'phoneNumber')}/>
          </Block>
        {isLoading ? <ActivityIndicator size="small" color={argonTheme.COLORS.APP_COLOUR}/>
        :
        <Button style= {styles.button}
                color= {argonTheme.COLORS.APP_COLOUR} 
                textStyle={{ color: "#4d4d4d" }}
                onPress={this.onSearchHandler} >
                          Search
                  </Button>}
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

const mapStateToProps = (state)=>{
  return {
    isLoading: state.search.loading,
    error: state.search.error,
    userData: state.search.userData,
  }

}

const mapDispatchToProps = (dispatch)=>{
  return {
    onSearch : (field)=>dispatch(searchTaxPayer(field))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
