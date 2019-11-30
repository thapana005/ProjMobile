import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableOpacity } from 'react-native';
import DrawerNavigation from './components/DrawerNavigation'
import StackNavigation from './components/StackNavigation'
import SwitchNavigation from './components/StackNavigation'
import BottomNavigation from './components/BottomNavigation'
// import SplashScreen from 'react-native-splash-screen'
import SplashScreen from './components/SplashScreen'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: false }
  }

  render()
  {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <View style={{flex:1,justifyContent: 'center'}}>
        <StackNavigation/>
        {/* <SwitchNavigation/> */}
        {/* <BottomNavigation/> */}
        {/* <DrawerNavigation/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
    marginTop:20,
  }
})
