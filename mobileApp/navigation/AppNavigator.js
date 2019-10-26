import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';

const appStack = { screen: MainTabNavigator };
const LoginStack = { screen: LoginNavigator };

export default createAppContainer(createSwitchNavigator(
  {
    App: appStack,
    Login: LoginStack,
  },
  {
    initialRouteName: 'Login',
  },
));
