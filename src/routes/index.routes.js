import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home/index.screen';
import Library from '../screens/Library/index.screen'
import Search from '../screens/Search/index.screen';

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
      tabBarIcon: ({ focused, tintcolor }) => (
        <Icon name="home" size={30} color={focused? '#fff': '#474441'} />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
      tabBarIcon: ({ focused, tintcolor }) => (
        <Icon name="search" size={30} color={focused? '#fff': '#474441'} />
      )
    }
  },
  Library: {
    screen: Library,
    navigationOptions: {
      headerShown: false,
      tabBarIcon: ({ focused, tintcolor }) => (
        <Icon name="library-music" size={30} color={focused? '#fff': '#474441'} />
      )
    }
  }
}, 
{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#fff',
    style: {
      backgroundColor: '#121212',
      borderTopColor: '#121212',
      paddingTop: 5
    }
  }
  // activeColor: '#f0edf6',
  // inactiveColor: '#3e2465',
  // barStyle: { backgroundColor: '#694fad' },
});

const Routes = createAppContainer(MainNavigator);

export default Routes;