import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';

const appStack = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});
const LoginStack = createSwitchNavigator({ SignIn: LoginNavigator });

export default createAppContainer(createSwitchNavigator(
  {
    App: appStack,
    Login: LoginStack,
  },
  {
    initialRouteName: 'Login',
  }
));
