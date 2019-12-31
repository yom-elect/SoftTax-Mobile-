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
  Dimensions, ActivityIndicator,
  Alert
} from "react-native";
import { Block, Button, Text, theme, } from "galio-framework";
import Input from '../components/Input'
import Icon from '../components/Icon'
import {login,authFail} from '../redux/actions/LoginActions'

import {connect} from 'react-redux'

const { height, width } = Dimensions.get("window");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
//import { TouchableOpacity } from "react-native-gesture-handler";

class Onboarding extends React.Component {

  state = {
    userName :'',
    password : ''
  }

  componentDidMount() {
    const {error} = this.props
    // console.log(error)
      if(error){
        Alert.alert('An Error Occurred', error, [{text: 'okay'}])
      }
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

  onNavigateHandler = async ()=>{
    const { onLogin,onError,navigation,isAuthenticated } = this.props;
    const {userName, password} = this.state
    try{
     await onLogin(userName,password) 
     
      if (isAuthenticated){
        navigation.navigate("App")
      }
      else {
        Alert.alert('Invalid User Details', error, [{text: 'okay'}])
      }
    }catch (err){
      onError(err)
    }
       
  }


  render() {

    let {error,isLoading} = this.props
    // console.log(isLoading)
    
    return (
      <TouchableWithoutFeedback onPress = {()=>{
          Keyboard.dismiss()
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
                      keyboardVerticalOffset= {30}
                      behavior="padding"
                      enabled>
                  <Block>
                <Block style={styles.title}>
                  <Input
                      right
                      color="black"
                      placeholder="Username"
                      required
                      email
                      placeholderTextColor={'#8898AA'}
                      errorText = "Please enter a valid email address."
                      onChangeText = {this.onChangeUser}
                      iconContent={
                        <Icon
                          size={14}
                          color={argonTheme.COLORS.ICON}
                          name="link"
                          family="AntDesign"
                        />
                      }
                    />
                  </Block>
                  <Block>
                  <Input
                      password
                      viewPass
                      right
                      color="black"
                      required
                      minLength = {5}
                      errorText = "Please enter a valid password"
                      placeholder="Password"
                      placeholderTextColor={'#8898AA'}
                      onChangeText = {this.onChangePassword}
                    />
                  </Block>
                </Block>
                </KeyboardAvoidingView>
                <Block center>
                  {isLoading ? (
                    <ActivityIndicator size="small" color={argonTheme.COLORS.APP_COLOUR}/>
                  )
                  :
                  (<Button
                    style={styles.button}
                  color= "#faef23"
                    onPress={this.onNavigateHandler}
                    textStyle={{ color: argonTheme.COLORS.BLACK }}
                  >
                    Login
                  </Button>)}
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
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  logo: {
    // width: 200,
    // height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%',
  },
  title: {
    marginTop:'5%'
  },
  subTitle: {
    marginTop: 20
  },
  softtax:{
    flex: 1,
    color: '#103a89',
    fontSize:40,
    paddingLeft : 5,
    marginTop:80
  },
  caption : {
    paddingTop: 5,
    paddingRight: 25,
    paddingBottom: 5 , 
    paddingLeft: 8,
    color : theme.COLORS.WHITE,
    backgroundColor: '#008000',
    width: '65%',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 0,
    borderBottomEndRadius:0,
    borderBottomLeftRadius:0,
  } , 
  alternate : {
    color : '#D3D3D3',
  }
});

const mapStateToProps = (state)=>{
  return {
    isLoading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token,
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onLogin : (email,password)=>dispatch(login(email,password)),
    onError : (error)=> dispatch(authFail(error)),
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Onboarding);
