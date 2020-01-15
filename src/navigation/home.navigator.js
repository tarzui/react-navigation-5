import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoNavigator} from './todo.navigator';
import {ProfileNavigator} from './profile.navigator';
import {AppRoute} from './app-routes';
import {AboutScreen, HomeDrawer, HomeTabBar} from '../scenes/home';
import {HomeIcon, InfoIcon, LayoutIcon, PersonIcon} from '../assets/icons';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

// FIXME(REACT-NAVIGATION-5): Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

const HomeBottomNavigator = () => (
  <BottomTab.Navigator tabBar={HomeTabBar}>
    <BottomTab.Screen
      name={AppRoute.TODO}
      component={TodoNavigator}
      options={{title: 'TODO', tabBarIcon: LayoutIcon}}
    />
    <BottomTab.Screen
      name={AppRoute.PROFILE}
      component={ProfileNavigator}
      options={{title: 'PROFILE', tabBarIcon: PersonIcon}}
    />
  </BottomTab.Navigator>
);

export const HomeNavigator = () => (
  <Drawer.Navigator drawerContent={HomeDrawer}>
    <Drawer.Screen
      name={AppRoute.HOME}
      component={HomeBottomNavigator}
      options={{title: 'Home', drawerIcon: HomeIcon}}
    />
    <Drawer.Screen
      name={AppRoute.ABOUT}
      component={AboutScreen}
      options={{title: 'About', drawerIcon: InfoIcon}}
    />
  </Drawer.Navigator>
);
