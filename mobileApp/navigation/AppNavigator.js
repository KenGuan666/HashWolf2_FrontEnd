import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';

const appStack = MainTabNavigator;
const LoginStack = LoginNavigator;

export default createAppContainer(createSwitchNavigator(
  {
    App: appStack,
    Login: LoginStack,
  },
  {
    initialRouteName: 'Login',
  },
));
