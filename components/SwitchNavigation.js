
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import BottomNavigation from './BottomNavigation'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

const stackPage1 = createStackNavigator({
        Page1Screen:{screen: Page1,navigationOptions: {
        header:null}},
    });
  
const stackPage2 = createStackNavigator({
        Page2Screen:{screen: Page2,navigationOptions: {
        header:null}},
    });
  
const stackPage3 = createStackNavigator({
        Page3Screen:{screen: Page3,navigationOptions: {
        header:null}},
    });

const bottomNavigate = createBottomTabNavigator({
    buttomPage1:{screen:Page3,navigationOptions: {
    header:null}},
    })

const stack = createSwitchNavigator({
        Page1Screen:{screen:Page1,navigationOptions: {
        header: null}},
        Page2Screen:{screen:Page2,navigationOptions: {
        header: null}},
        Page3Screen:{screen:bottomNavigate,navigationOptions: {
        header: null}},
    });

export default createAppContainer(stack);