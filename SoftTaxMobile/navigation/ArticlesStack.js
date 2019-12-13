import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
} from "react-navigation";

import Articles from "../screens/Articles";

import Header from "../components/Header";

import transitionConfig from './transitionConfig'


const ArticlesStack = createStackNavigator({
    Articles: {
      screen: Articles,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Articles" navigation={navigation} />
      })
    }
  },{
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  });
  
export default ArticlesStack;