import React from "react";
import {
  createStackNavigator,
} from "react-navigation";
import { Block } from "galio-framework";

import Header from "../components/Header";
import Elements from "../screens/Elements";
// import ElementsStack from './ElementsStack'
import SearchStack from './SearchStack'
import CustomerStack from './CustomerStack'
import transitionConfig from './transitionConfig'


const HomeStack = createStackNavigator(
    {
        Home: {
        screen: SearchStack,
        navigationOptions: ({ navigation }) => ({
          header: <Header title="Customer Search" navigation={navigation} />
        })
      },
      Customer: {
          screen: CustomerStack,
          navigationOptions: ({ navigation }) => ({
            header: <Header title="Assessment"  navigation={navigation} />
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