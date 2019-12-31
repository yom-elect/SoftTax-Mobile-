import React from "react";
import {
  createStackNavigator,
} from "react-navigation";


// import Header from "../components/Header";

// import transitionConfig from './transitionConfig'
import Onboarding from "../screens/Onboarding";

const AuthStack = createStackNavigator({
    Onboarding: {
        screen: Onboarding,
      }
  },{
   defaultNavigationOptions: {
    headerTitle: 'Login To SoftTax App',
  }
  });
  
export  default AuthStack;