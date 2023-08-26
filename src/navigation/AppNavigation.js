import React from 'react';
import { createAppContainer, ThemeColors } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  navigatorOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen,
  },
  navigatorOptions
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Все',
      tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor} />,
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Stared',
      tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor} />,
    },
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      tabBarLabel: 'about',
      tabBarIcon: info => <Ionicons name="tennisball" size={25} color={info.tintColor} />,
    },
  },

  Create: {
    screen: CreateNavigator,
    navigationOptions: {
      tabBarLabel: 'create',
      tabBarIcon: info => <Ionicons name="ribbon" size={25} color={info.tintColor} />,
    },
  },
};

const BottomNavigator = createMaterialBottomTabNavigator(bottomTabsConfig, {
  activeTintColor: '#fff',
  shifting: true,
  barStyle: {
    backgroundColor: THEME.MAIN_COLOR,
  },
});

export const AppNavigation = createAppContainer(BottomNavigator);
