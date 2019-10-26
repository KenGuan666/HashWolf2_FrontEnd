import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AllGroupScreenNavigator from '../navigation/AllGroupScreenNavigator';
import AllGroupScreen from '../screens/AllGroupScreen';
import SingleGroupScreen from '../screens/SingleGroupScreen';
import NewGroupScreen from '../screens/NewGroupScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const AllGroupStack = createStackNavigator(
  {
    AllGroupScreen: { screen: AllGroupScreen },
    SingleGroupScreen: { screen: SingleGroupScreen },
  },
  {
    initialRouteName: 'AllGroupScreen',
  },
);

AllGroupStack.navigationOptions = {
  tabBarLabel: 'Groups',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-people' : 'md-people'
      }
    />
  ),
};

AllGroupStack.path = '';

const NewGroupStack = createStackNavigator(
  {
    NewGroup: NewGroupScreen,
  },
  config
);

NewGroupStack.navigationOptions = {
  tabBarLabel: 'Add Group',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} />
  ),
};

NewGroupStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  AllGroupStack,
  NewGroupStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
