import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AppRoute} from './app-routes';
import {
  TodoDetailsScreen,
  TodoDoneScreen,
  TodoInProgressScreen,
  TodoTabBar,
} from '../scenes/todo';
import {DoneAllIcon, GridIcon} from '../assets/icons';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// FIXME: Is it possible to track swipe progress?
// In this case, it's needed to synchronize tab-bar indicator in TodoScreen
//
// Currently I have set `swipeEnabled` to `false` just for saving navigation consistence
//
// Btw, it's not possible to use `@react-navigation/material-top-tabs
// without `react-native-tab-view` even if you use custom `tabBarComponent`
//
// Anyway, it's possible to create top tab navigation with gesture support with UI Kitten `TabView`

const TodoTabsNavigator = () => (
  <TopTab.Navigator tabBar={props => <TodoTabBar {...props} />}>
    <TopTab.Screen
      name={AppRoute.TODO_IN_PROGRESS}
      component={TodoInProgressScreen}
      options={{title: 'IN PROGRESS', tabBarIcon: GridIcon}}
    />
    <TopTab.Screen
      name={AppRoute.TODO_DONE}
      component={TodoDoneScreen}
      options={{title: 'DONE', tabBarIcon: DoneAllIcon}}
    />
  </TopTab.Navigator>
);

export const TodoNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoute.TODO} component={TodoTabsNavigator} />
    <Stack.Screen name={AppRoute.TODO_DETAILS} component={TodoDetailsScreen} />
  </Stack.Navigator>
);
