import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
} from "react-navigation";

import Profile from "../screens/Profile";
import Header from "../components/Header";

import transitionConfig from './transitionConfig'


const ProfileStack = createStackNavigator(
    {
      Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
          header: (
            <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
          ),
          headerTransparent: true
        })
      }
    },
    {
      cardStyle: { backgroundColor: "#FFFFFF" },
      transitionConfig
    }
  );

export default ProfileStack;