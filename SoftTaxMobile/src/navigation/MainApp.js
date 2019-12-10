import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";

import CustomDrawerNavigator from "../components/CustomDrawerNavigator/CustomDrawerNavigator";
import Assessment from "../views/MainApp/Views/Assessment";
import AssignList from "../views/MainApp/Views/AssignList";
import RaiseInfSec from "../views/MainApp/Views/RaiseInfSec";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";

const MainNavigator = createDrawerNavigator(
  {
    Assessment: {
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="md-home" style={{ color:"#ffe" }} />
        ),
        drawerLabel: "Assessment"
      },
      screen: Assessment
    },
    Login: {
    navigationOptions: {
      header: null,
      drawerLabel: ()=> {}
    },
    screen: Login
  },

  Register: {
    navigationOptions: {
      header: null,
      drawerLabel : () => {}
    },
    screen: Register
    },
    
    AssignList: {
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="md-settings" style={{ color: "#ffe" }} />
        ),
        drawerLabel: "AssignList"
      },
      screen: AssignList
    },

    RaiseInfSec: {
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="ios-person" style={{ color: "#ffe" }} />
        ),
        drawerLabel: "RaiseInfSec"
      },
      screen: RaiseInfSec
    }
  },
  {
    contentComponent: (props)=> <CustomDrawerNavigator {...props}/>
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;