import React from "react";
import { Easing, Animated } from "react-native";
import {
    createMaterialTopTabNavigator,
} from "react-navigation";

import Register from "../screens/Register";
import CorTaxPayers from "../screens/CorTaxPayers"

const RegisterStack = createMaterialTopTabNavigator ({
    IndTaxPayers : {
      screen : Register

    },
    CorTaxPayers : {
      screen : CorTaxPayers
    }

});

export default RegisterStack;