import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
} from "react-navigation";
import { Block } from "galio-framework";

import Home from "../screens/Home";
import Pro from "../screens/Pro";

import Header from "../components/Header";

import transitionConfig from './transitionConfig'

const HomeStack = createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          header: <Header search options title="Home" navigation={navigation} />
        })
      },
      Pro: {
        screen: Pro,
        navigationOptions: ({ navigation }) => ({
          header: (
            <Header left={<Block />} white transparent title="" navigation={navigation} />
          ),
          headerTransparent: true
        })
      }
    },
    {
      cardStyle: {
        backgroundColor: "#F8F9FE"
      },
      transitionConfig
    }
  );

export default HomeStack;