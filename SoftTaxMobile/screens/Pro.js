import React from 'react';
import { StyleSheet, Dimensions, ScrollView,
  Text,Picker,ActivityIndicator,Alert ,View } from 'react-native';
import { Block, theme,Button } from 'galio-framework';
import {connect} from 'react-redux'

import {searchTaxPayer} from '../redux/actions/SearchAction'

const { width } = Dimensions.get('screen');
import Input from '../components/Input'
import {argonTheme} from '../constants/'
import {Data} from '../constants/selections'


class Pro extends React.Component {
  state = {
    industry : '',
    sector: '',
    corporateQuery:{
      taxPayerId : '',
      phoneNumber : '',
      orgName : ''
    },

  }
  onQueryHandler = (input, type)=>{
    const  {corporateQuery} = this.state
      const corporateQueryForm = {
        ...corporateQuery,
        [type]:input
      }
      this.setState({corporateQuery:corporateQueryForm})

  }

  onSearchHandler = async ()=>{
    console.log(this.state)
    const {navigation, error, isLoading, userData, onSearch} = this.props
    // const {corporateQuery} = this.state

    try {
      
      await onSearch(this.state)
      
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
    const {isLoading} =this.props
    const {industry, sector} = this.state
    const industryPicker =  Data.industries.map(ele=>{
      return <Picker.Item label={ele.name} value={ele.name} key= {ele.Id}/>
    })
    const sectorPicker = Data.sectors.map(ele=>{
      return  <Picker.Item label={ele.name} value={ele.name} key={ele.Id}/>
    })
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
            <Input style={styles.input} onChangeText={(input)=>this.onQueryHandler(input,'taxPayerId')}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:45,}}>Org Name: </Text>
            <Input style={styles.input} onChangeText={(input)=>this.onQueryHandler(input,'orgName')}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{paddingRight:18,}}>Phone Number: </Text>
            <Input style={styles.input } onChangeText={(input)=>this.onQueryHandler(input,'phoneNumber')}/>
          </Block>
          <Block flex row style={styles.detail}>
            <Text>Industry: </Text>
            <View  style={styles.pick} >
              <Picker 
            style={styles.picker}
            selectedValue ={industry}
            onValueChange = {(itemValue,itemIndex)=>{
                  this.setState({industry:itemValue})
            }} >
                {industryPicker}
            </Picker>
            </View>
            
          </Block>
          <Block flex row style={styles.detail}>
            <Text style={{marginRight:10}}>Sector: </Text>
            <View style={styles.pick}>
                <Picker  
            style={styles.picker}
            selectedValue = {sector}
            onValueChange = {(itemValue,itemIndex)=>{
              this.setState({sector:itemValue})
            }}>
                {sectorPicker}
            </Picker>
            </View>
          
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
    pick:{
      borderRadius: 10,
      borderWidth: 1, 
      borderColor: '#bdc3c7', 
      overflow: 'hidden'
    },
    picker: {
      width: 200,
      marginTop:"-5%",
      marginLeft:60,
      // alignSelf: "stretch",
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
    marginTop:15,
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
export default connect(mapStateToProps, mapDispatchToProps)(Pro);
