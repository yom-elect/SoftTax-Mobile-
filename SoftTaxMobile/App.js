import React from 'react';
import { Image } from 'react-native';
//import { AppLoading } from 'expo';
import SplashScreen from 'react-native-splash-screen'
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {useScreens} from 'react-native-screens'

import Screens from './navigation/Screens';
import { Images, argonTheme } from './constants';

import loginReducer from './redux/reducer/LoginReducer'
import registerReducer from './redux/reducer/RegisterReducer'
import searchReducer from './redux/reducer/SearchReducer'

const rootReducer = combineReducers ({
  auth: loginReducer,
  register : registerReducer,
  search : searchReducer,
}) 
const store =createStore(rootReducer, applyMiddleware(thunk))

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];


useScreens()
// cache product images
// articles.map(article => assetImages.push(article.image));



function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }
  
  componentDidMount(){
    if (!this.state.isLoadingComplete){
        this._loadResourcesAsync
        this._handleLoadingError
        this._handleFinishLoading
    }else{
      SplashScreen.hide()
    }
    
    
    
  }

  render() {
    // if(!this.state.isLoadingComplete) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
      return (
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <Provider store = {store}>
              <Screens />
            </Provider>
            
          </Block>
        </GalioProvider>
      );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}
