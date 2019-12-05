import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";

import CustomDrawerNavigator from "../../components/CustomDrawerNavigator/CustomDrawerNavigator";
import Assessment from "./Views/Assessment";
import AssignList from "./Views/AssignList";
import RaiseInfSec from "./Views/RaiseInfSec";

const MainApp = createDrawerNavigator(
  {
    Assessment: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Assessment"
      },
      screen: Assessment
    },

    AssignList: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "AssignList"
      },
      screen: AssignList
    },

    RaiseInfSec: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" style={{ color: tintColor }} />
        ),
        drawerLabel: "RaiseInfSec"
      },
      screen: RaiseInfSec
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

//const MainApp = createAppContainer(MainNavigator);
export default MainApp;