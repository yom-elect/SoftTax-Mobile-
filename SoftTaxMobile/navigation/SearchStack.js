import React from "react";
import { Easing, Animated } from "react-native";
import {
    createMaterialTopTabNavigator,
} from "react-navigation";
import { Block } from "galio-framework";

import Home from "../screens/Home";
import Pro from "../screens/Pro";

import Header from "../components/Header";
import transitionConfig from './transitionConfig'

const SearchStack = createMaterialTopTabNavigator(
    {
        'Individual TaxPayer': {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          header: <Header  options title="INDIVIDUAL TAXPAYER SEARCH" navigation={navigation} />
        })
      },
        'Corporate TaxPayer': {
          screen: Pro,
          navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
              <DrawerItem focused={focused} screen="COMPANY SEARCH" title="COMPANY SEARCH" />
            )
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

export default SearchStack;