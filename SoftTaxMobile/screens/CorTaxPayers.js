import React from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Text,
  KeyboardAvoidingView,
 FlatList,
  Image, Alert, Keyboard ,ActivityIndicator, TouchableWithoutFeedback
} from "react-native";
import DatePicker from 'react-native-datepicker'

import { registerTaxPayer,regFail } from "../redux/actions/RegisterActions";
import { Block,theme } from "galio-framework";
import Placeholders from '../constants/regPlaceHolders'
import { Button, Icon, Input } from "../components";

import {connect} from 'react-redux'
// import argonTheme from "../constants/Theme";
// import Images from "../constants/Images";
import { Images, argonTheme } from "../constants";
const { width, height } = Dimensions.get("screen");

class CorTaxPayers extends React.Component {
    state = {
      corporateInfo:{
      Surname:'',
      'First Name':'',
      'Middle Name':'',
      'Date Of Birth':'',
      Email:'',
      'Phone Number':'',
      Username:'',
      Password:'',
      'Confirm Password' :'',
      'Corporate Name' :'',
      'Office Address':'',
      'Office Phone':''
    }
  }

  inputCorporateHandler = (input,inputIdentifier)=>{
    // console.log(input,inputIdentifier)
    const corporateForm = {
      ...this.state.corporateInfo,
      [inputIdentifier]:input
    }
    this.setState({corporateInfo:corporateForm})
  }

  onRegisterCorporate = async ()=>{
    const {navigation, onError, onRegister , error, isLoading} = this.props
    let {corporateInfo} = this.state
    try {
    let type = 'Corporate'
    console.log(corporateInfo)

    await onRegister(corporateInfo, type)

    if (!isLoading){
      navigation.navigate("Home")
    }
    else {
      Alert.alert('An Error Occurred', error, [{text: 'okay'}])
    }
    } catch (err) {
        onError(err)
    }
  }

  render() {
    const {isLoading, error, } = this.props
    return (
      <TouchableWithoutFeedback onPress = {()=>{
          Keyboard.dismiss()}} >
        <Block flex middle>
          
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1}}>
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block style={{ marginTop: theme.SIZES.BASE }}>
                <Image source={Images.Logo} style={styles.logo} />
              </Block>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.9} style={{ marginBottom: 15 }}>
                      <ScrollView>
                      <Block flex >
                        <FlatList
                        data = {Placeholders.CorHolders}
                        renderItem = {({item})=>{
                          let input
                          if (item.name !== 'Date Of Birth'){
                              input =  <Input borderless 
                              placeholder={item.name} 
                              password= {item.password}
                              onChangeText = {(input)=>this.inputCorporateHandler(input,item.name)}
                              iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name={item.icon}
                                     family="Feather"
                                     style={styles.inputIcons}
                                   />
                                 }/>
                          }else {
                             input  = <DatePicker
                             style={{width: width - theme.SIZES.BASE * 2}}
                             date={this.state.corporateInfo["Date Of Birth"]}
                             mode="date"
                             placeholder={item.name}
                             format="YYYY-MM-DD"
                             minDate="1940-01-01"
                             maxDate="2011-01-01"
                             confirmBtnText="Confirm"
                             cancelBtnText="Cancel"
                             customStyles={{
                               dateIcon: {
                                 position: 'absolute',
                                 left: 0,
                                 top: 4,
                                 marginLeft: 0
                               },
                               dateInput: {
                                borderRadius: 4,
                                borderColor: argonTheme.COLORS.BORDER,
                                height: 44,
                                backgroundColor: '#FFFFFF',
                                
                               }
                               // ... You can check the source to find the other keys.
                             }}
                             onDateChange={(date) => this.inputCorporateHandler(date,item.name)}
                           />
                          }
                          return input;
                        } }
                             keyExtractor = {item=> item.name}
                        />
                      </Block>
                      <Block>
                        {isLoading ?
                        <ActivityIndicator size="small" color={argonTheme.COLORS.APP_COLOUR}/>
                        :
                        <Button
                            style={styles.button}
                            onPress={this.onRegisterCorporate}
                            textStyle={{ color: argonTheme.COLORS.BLACK }}
                          >
                          Register
                        </Button>}
                      </Block>
                      <Block>
                          <Text></Text>
                      </Block>
                      </ScrollView>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
       </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.92,
    height: height * 0.95,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  logo: {
    //  width: 200,
    //  height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-1%',
    alignContent:'center',
    marginLeft: '40%'
  },
  
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  button: {
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 3,
    // shadowRadius: 0,
    // shadowOpacity: 0,
    backgroundColor:"#faef23",
  }
});

const mapStateToProps = (state)=>{
    return {
      isLoading : state.register.loading,
      error: state.register.error
    }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onRegister : (taxPayerData,type)=>dispatch(registerTaxPayer(taxPayerData,type)),
    onError : (error)=> dispatch(regFail(error)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CorTaxPayers);
