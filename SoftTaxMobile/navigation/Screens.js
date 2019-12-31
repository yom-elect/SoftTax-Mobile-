import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

// screens
import ArticlesStack from './ArticlesStack';
// import ProfileStack from './ProfileStack';
import RegisterStack from './RegisterStack';
import HomeStack from './HomeStack';
import AuthStack from './AuthNavigator'




// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
// import Header from "../components/Header";
import StartupScreen from '../screens/StartupScreen'


//Drawer Navigator

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Manage Tax Payers" />
        )
      })
    },
    Account: {
      screen: RegisterStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Account" />
        )
      })
    },
    Articles: {
      screen: ArticlesStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Articles" title="Articles" />
        )
      })
    }
  },
  Menu
);


const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthStack,
  App: AppStack
})

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
