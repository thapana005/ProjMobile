
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import BottomNavigation from './BottomNavigation'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'

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

const stackPage4 = createStackNavigator({
        Page4Screen:{screen: Page4,navigationOptions: {
        header:null}},
    });

const stackPage5 = createStackNavigator({
        Page5Screen:{screen: Page5,navigationOptions: {
        header:null}},
    });


const stackPage6 = createStackNavigator({
        Page6Screen:{screen: Page6,navigationOptions: {
        header:null}},
    });

const example = createBottomTabNavigator({
    buttomPage1:{screen:Page3,navigationOptions: {
    header:null}},
    buttomPage1:{screen:Page3,navigationOptions: {
    header:null}},
    })

const bottomNavigate = createBottomTabNavigator({
        buttomPage1:{screen:stackPage3,navigationOptions: {
        header:null}},
        buttomPage2:{screen:stackPage4,navigationOptions: {
        header:null}},
        buttomPage3:{screen:stackPage6,navigationOptions: {
        header:null}},
    },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName == 'buttomPage1') {
              iconName = 'ios-star';
            } else if (routeName == 'ChatTab') {
              iconName = 'ios-chatbubbles';
            }
            else if(routeName == 'buttomPage2'){
              iconName = 'ios-person';
            }
            else if(routeName == 'buttomPage3'){
              iconName = 'ios-aperture';
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
    
        tabBarOptions: {
          showLabel: true,
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor:'#000 000 00',
          labelStyle:{fontSize:15},
          tabStyle:{backgroundColor:'gray',opacity:.8}
        }
    
    })

const stack = createStackNavigator({
        Page1Screen:{screen:Page1,navigationOptions: {
            header: null}},
        Page2Screen:{screen:Page2,navigationOptions: {
            header: null}},
        Page3Screen:{screen:bottomNavigate,navigationOptions: {
            header: null, 
            gesturesEnabled: false}},
        Page4Screen:{screen:Page4,navigationOptions: {
            header: null, 
            gesturesEnabled: false}},
        Page5Screen:{screen:Page5,navigationOptions: {
            header: null}},
    });

export default createAppContainer(stack);