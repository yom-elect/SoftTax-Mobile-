import React from "react";
import {
  createStackNavigator,
} from "react-navigation";


import Header from "../components/Header";

import transitionConfig from './transitionConfig'

const ElementsStack = createStackNavigator({
    Elements: {
      screen: Elements,
      // navigationOptions: ({ navigation }) => ({
      //   header: <Header title="Elements" navigation={navigation} />
      // })
    }
  },{
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  });
  
export  default ElementsStack;