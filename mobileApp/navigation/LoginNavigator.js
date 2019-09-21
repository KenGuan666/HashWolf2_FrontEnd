import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const NavigationStack = createStackNavigator(
  {
    SignIn: LoginScreen
  },
  config
);

NavigationStack.path = '';

export default NavigationStack;
