import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AllGroupScreen from '../screens/AllGroupScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const AllGroupScreenStack = createStackNavigator(
  {
    AllGroup: AllGroupScreen,
  },
  config,
)

AllGroupScreenStack.path = '';

export default AllGroupScreenStack;
