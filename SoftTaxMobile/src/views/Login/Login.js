import React, { Component } from "react";
import { Button, View ,Text, TouchableOpacity, StyleSheet} from "react-native";


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
       
          <View Style={styles.register}>
                <Button
                title="Login"
                onPress={() => this.props.navigation.navigate("Assessment")}
              /> 
            </View>  
             <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Register')}>
            <Text>Don't have an account ?</Text>
        </TouchableOpacity>
      </View>
                 
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    heading: {
      marginTop: 10,
      marginBottom: 5, 
    },
    softTax: {
      flex : 1,
      color: "#103a89",
      fontSize: 40,
      paddingLeft: 5,
      lineHeight: 0.8
    },
    form: {
      width: 100
    },
   
    inputContainer: {
      width: 80,
      height: 50,
      margin: "auto",
      borderTopLeftRadius: 1,
      borderRadius: 5,
      fontSize: 16,
      // textIndent: 15,
      paddingTop: 20 ,
      paddingLeft: 40,
      color: "#666",
      letterSpacing: 1,
      // boxSizing: "border-box",
      backgroundColor: "transparent"
    },
   
    // "register_button": {
    //   "display": "block",
    //   "margin": "7% auto 2%",
    //   "height": "50px",
    //   "width": "80%",
    //   "border": "none",
    //   "borderRadius": "2px",
    //   "outline": "none",
    //   "cursor": "pointer",
    //   "fontSize": "16px",
    //   "backgroundColor": "#006600",
    //   "color": "#fff",
    //   "boxShadow": "0px 3px 5px rgba(0,0,0,.2)"
    // },
    // "register_button_hover": {
    //   "background": "#333",
    //   "color": "#fff"
    // },
   
});
