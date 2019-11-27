import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableOpacity } from 'react-native';
import DrawerNavigation from './components/DrawerNavigation'
import StackNavigation from './components/StackNavigation'
import SwitchNavigation from './components/StackNavigation'
import BottomNavigation from './components/BottomNavigation'

export default class App extends React.Component {

  constructor (props) {
    super (props);
  }

  // componentDidMount = () => {
  //   this.props.navigation.navigate("Page1")
  // }

  render()
  {
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
