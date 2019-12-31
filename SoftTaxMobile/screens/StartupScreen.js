import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';

import {argonTheme} from '../constants/';
import {authSuccess} from '../redux/actions/LoginActions'

const StartupScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('token');
      if (!userData) {
        props.navigation.navigate('Auth');
        return;
      }
      const transformedData = userData;
      // const { token } = transformedData;
      // console.log(transformedData)
      // const expirationDate = new Date(expiryDate);

      // if (expirationDate <= new Date() || !token || !userId) {
      //   props.navigation.navigate('Auth');
      //   return;
      // }

      // const expirationTime = expirationDate.getTime() - new Date().getTime();

      props.navigation.navigate('App');
      dispatch(authSuccess(transformedData));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={argonTheme.COLORS.PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
