import React from "react";
import { DrawerItems,SafeAreaView } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Button
} from "react-native";
import { Block, theme } from "galio-framework";
import { useDispatch } from 'react-redux';
import Icon from "../components/Icon";
import argonTheme from "../constants/Theme";


import {authLogout} from '../redux/actions/LoginActions'
import Images from "../constants/Images";

const { width } = Dimensions.get("screen");

// const onLogoutHandler=()=>{
 
  
// }

const Drawer = (props,dispatch) => (
  <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block flex={0.05} style={styles.header}>
      <Image styles={styles.logo} source={Images.Logo} />
    </Block>
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DrawerItems {...props} />
        
      </ScrollView>
    </Block>
  </Block>
);

const Menu = {
contentComponent: props => {
  const dispatch = useDispatch();
  return(
    <Block flex>
      <Drawer {...props} dispatch/>
      <Button 
        style= {{paddingTop:20}}
        title = "Logout"
        color = {argonTheme.COLORS.ERROR}
        onPress={() => {
          dispatch(authLogout());
          props.navigation.navigate('Auth');
        }} 
        iconContent={
          <Icon 
            name="logout"
           family = "AntDesign"
          size= {12}
        color = {argonTheme.COLORS.ERROR}
        />
        }
      />   
    </Block>
  )

},
  drawerBackgroundColor: "white",
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: "white",
    inactiveTintColor: "#000",
    activeBackgroundColor: "transparent",
    itemStyle: {
      width: width * 0.75,
      backgroundColor: "transparent"
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: "normal"
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      overflow: "hidden"
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center'
  }
});

export default Menu;
