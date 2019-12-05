import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import MainApp from "./views/MainApp/MainApp"

const MainNavigator = createStackNavigator({
  Login: {
    navigationOptions: {
      header: null
    },
    screen: Login
  },

  Register: {
    navigationOptions: {
      header: null
    },
    screen: Register
  },
  MainApp: {
    navigationOptions: {
      header: null
    },
    screen: MainApp
  }

});

// AuthReg.navigationOptions = ({ navigation }) => ({
//   tabBarVisible: navigation.state.index === 0,
//   swipeEnabled: navigation.state.index === 0
// });

const AuthReg = createAppContainer(MainNavigator)
export default AuthReg;