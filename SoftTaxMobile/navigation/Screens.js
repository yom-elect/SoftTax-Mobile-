import React from "react";
import { Easing, Animated } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  
} from "react-navigation";

// screens
import Onboarding from "../screens/Onboarding";
import ArticlesStack from './ArticlesStack';
import ProfileStack from './ProfileStack';
import RegisterStack from './RegisterStack';
import HomeStack from './HomeStack';



// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
// import Header from "../components/Header";



// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Manage Tax Payers" />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="User Dashboards" />
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
    // Elements: {
    //   screen: ElementsStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Elements" title="Elements" />
    //     )
    //   })
    // },
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

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
