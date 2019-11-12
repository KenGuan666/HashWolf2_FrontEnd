import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const NavigationStack = createStackNavigator(
  {
    SignIn: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'SignIn',
  },
);

NavigationStack.path = '';

export default NavigationStack;
