import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight, Vibration
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'


class Page6 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       name: 'Name : ',
       email: 'Email : ',
       imageuri :'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',
     };

  }

  async componentDidMount () {
    // this.focusListener = this.props.navigation.addListener('didFocus', () => {
    //   this.onFocusFunction()
    // })
    database.getUser(this.getUserComplete)
  }

  getUserComplete=async(user)=>{
    this.setState({ email: user.email })
    console.log(user.email)
  }

  onPressAddFund= () => {
      database.updateFund(this.state.email);
    
  }

  addItemComplete=async()=>{
    console.log("Open complete!!")
    const DURATION = 10000;
    const PATTERN = [500];

    //Vibration.vibrate(DURATION);

    Vibration.vibrate(PATTERN);

    //Vibration.vibrate(PATTERN, true);
    //Vibration.cancel();
  }

  read_Account_success=async(account)=>{
    this.setState({ imageuri: account.imageuri });
    this.setState({ name: account.firstName });
    this.setState({ email: account.email});
  }

  read_Account_fail=async()=>{

  }

  

  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>

        <Text style={styles.text}>Page6</Text>
        <Text style={styles.text}>Page6</Text>

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressAddFund}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Adding Fund</Text>
        </TouchableOpacity>

      </LinearGradient>

    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  text: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },
  textInput: {
      alignItems: 'center',
      height:50,
      width:310,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },
  imgStyles: {
    width: 120,
    height: 120,
    alignItems:'center',
    resizeMode:'stretch',
    margin:10,
  }


});

export default Page6;