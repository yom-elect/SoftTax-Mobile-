import React from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
 FlatList,
  Image
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import Placeholders from '../constants/regPlaceHolders'
import { Button, Icon, Input } from "../components";
// import argonTheme from "../constants/Theme";
// import Images from "../constants/Images";
import { Images, argonTheme } from "../constants";
const { width, height } = Dimensions.get("screen");

class CorTaxPayers extends React.Component {


  render() {
    const {navigation} = this.props
    return (
        <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1}}>
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block style={{ marginTop: theme.SIZES.BASE }}>
                <Image source={Images.Logo} style={styles.logo} />
              </Block>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.9} style={{ marginBottom: 15 }}>
                      <ScrollView>
                      <Block>
                        <FlatList
                        data = {Placeholders.CorHolders}
                        renderItem = {({item})=> ( <Input borderless 
                          placeholder={item.name} 
                          iconContent={
                               <Icon
                                 size={16}
                                 color={argonTheme.COLORS.ICON}
                                 name={item.icon}
                                 family="Feather"
                                 style={styles.inputIcons}
                               />
                             }/>) }
                             keyExtractor = {item=> item.name}
                        />
                      </Block>
                      <Block>
                        <Button
                            style={styles.button}
                            onPress={() => navigation.navigate("Home")}
                            textStyle={{ color: argonTheme.COLORS.BLACK }}
                          >
                          Register
                        </Button>
                      </Block>
                      </ScrollView>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.92,
    height: height * 0.95,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  logo: {
    //  width: 200,
    //  height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-1%',
    alignContent:'center',
    marginLeft: '40%'
  },
  
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  button: {
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor:"#faef23",
  }
});

export default CorTaxPayers;
