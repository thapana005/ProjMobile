import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
    header:null}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
    header:null}},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Page3,navigationOptions: {
    header:null}},
});

const navigator = createBottomTabNavigator({
    buttomPage1:{screen:Page1,navigationOptions: {
    title: 'Page1'}},
    buttomPage2:{screen:Page2,navigationOptions: {
    title: 'Page2'}},
    buttomPage3:{screen:Page3,navigationOptions: {
    title: 'Page3'}},
})


export default createAppContainer(navigator);