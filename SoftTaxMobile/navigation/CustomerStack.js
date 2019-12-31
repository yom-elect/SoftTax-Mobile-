import React from "react";
import {
  createStackNavigator,
} from "react-navigation";

import Elements from "../screens/Elements";
import NewAssessment from '../screens/NewAssessment'
import transitionConfig from './transitionConfig'

const CustomerStack = createStackNavigator(
    {
    Customer: {
        screen: Elements
    },
    NewAssessment: {
      screen: NewAssessment
    }
},
{headerMode: 'none'}
)

export default CustomerStack