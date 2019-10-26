import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SingleGroupScreen from '../screens/SingleGroupScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SingleGroupScreenStack = createStackNavigator(
  {
    SingleGroup: SingleGroupScreen,
  },
  config
)

SingleGroupScreenStack.path = '';

export default SingleGroupScreenStack;
