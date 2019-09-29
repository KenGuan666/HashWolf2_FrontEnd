import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AllGroupScreen from '../screens/AllGroupScreen';
import NewGroupScreen from '../screens/NewGroupScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const AllGroupStack = createStackNavigator(
  {
    AllGroup: AllGroupScreen,
  },
  config
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
