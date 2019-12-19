import React from "react";
import {
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions, View, 
} from "react-native";
import { Block, Button, Text, theme, } from "galio-framework";
import Input from '../components/Input'
import Icon from '../components/Icon'

import {connect} from 'react-redux'

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
//import { TouchableOpacity } from "react-native-gesture-handler";

class Onboarding extends React.Component {

  state = {
    userName :'',
    password : ''
  }

  onChangePassword = (input)=>{
    this.setState({
        password : input
    })
  }

  onChangeUser = (input)=>{
    this.setState({
        userName : input
    })
  }

  onNavigateHandler = ()=>{
    const { navigation } = this.props;
    const {userName, password} = this.state

    if (userName && password){
      navigation.navigate("Home")
    }
    else {
      return 
    }

    
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress = {()=>{
          Keyboard.dismiss();
      }}>
           <Block flex style={styles.container}>
          <StatusBar hidden />
          <Block flex center style= {styles.heading}  >
          <ImageBackground
              source={Images.Onboarding}
              style={{ height, width, zIndex: 1, opacity: 0.1 }}
            />
          </Block>
          <Block center>
            <Image source={Images.LogoOnboarding} style={styles.logo} />
          </Block>
          <Block flex space="between" style={styles.padded}>
            
              <Block flex space="around" style={{ zIndex: 2 }}>
              <KeyboardAvoidingView  
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled>
                  <Block>
                <Block style={styles.title}>
                  <Input
                      right
                      color="#4d4d4d"
                      placeholder="Username"
                      placeholderTextColor={'#8898AA'}
                      onChangeText = {this.onChangeUser}
                      iconContent={
                        <Icon
                          size={14}
                          color={argonTheme.COLORS.ICON}
                          name="user"
                          family="Feather"
                        />
                      }
                    />
                  </Block>
                  <Block>
                  <Input
                      password
                      viewPass
                      right
                      color="#4d4d4d"
                      placeholder="Password"
                      placeholderTextColor={'#8898AA'}
                      onChangeText = {this.onChangePassword}
                    />
                  </Block>
                </Block>
                </KeyboardAvoidingView>
                <Block center>
                  <Button
                    style={styles.button}
                    color= "#faef23"
                    onPress={this.onNavigateHandler}
                    textStyle={{ color: "#4d4d4d" }}
                  >
                    Login
                  </Button>
                  {/* <TouchableOpacity style = {styles.subTitle} onPress = {()=> navigation.navigate("Register")}>
                      <Text style= {styles.alternate}>Don't have an account? <Text style = {{color : '#103a89'}}>Sign Up</Text> </Text>
                  </TouchableOpacity> */}
                </Block>
            </Block> 
          </Block>
        </Block>
      </TouchableWithoutFeedback>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading:{
    marginTop: '-5%',
    marginBottom: '5%'
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    position: 'relative',
    marginTop: '-68%',
    paddingTop: 23,
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
   
  },
  logo: {
    zIndex: 2,
    position: 'relative',
    marginTop: '-60%'
  },
  title: {
    marginBottom:'5%',
    height: theme.SIZES.BASE * 3,
  },
  
  alternate : {
    color : '#D3D3D3',
  }
});

export default connect(null,null)(Onboarding);
