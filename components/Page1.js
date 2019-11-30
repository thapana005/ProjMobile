import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight, Vibration, 
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import database from './Database'


class Page1 extends React.Component {

  state = {
    email: '',
    password:'',
  };

  onPressOK = () => {
    account={
      email:this.state.email,
      password:this.state.password,
    }

      database.login(account,this.login_success,this.login__fail);
   
  };

  login_success=async(account)=>{
    this.props.navigation.navigate("Profile",{userMail: account.email})
    //Alert.alert(account.email)
  }

  login__fail=async(error)=>{

  }

  onChangeTextEmail = email => this.setState({email});
  onChangeTextPassword = password => this.setState({password});

  render() {
    return (

      <ImageBackground
      style={{ width: '100%', height: '100%' ,flex:1 }}
      source={{uri: 'https://cdn.pixabay.com/photo/2015/08/07/12/34/background-879311_1280.jpg'}}>


      <View style={{flex:1,justifyContent: 'center'}}>

      <TextInput
        style={styles.nameInput}
        placeholder="Email"
        onChangeText={this.onChangeTextEmail}
      />

      <TextInput
        style={styles.nameInput}
        placeholder="Password"
        secureTextEntry ={true}
        onChangeText={this.onChangeTextPassword}
      />

      <TouchableOpacity
        style={styles.touchableUser}
        onPress={this.onPressOK}>
        <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Login</Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <Text style={{fontSize:15}}>Don't have an Acccount? </Text>
      <Text style={{textDecorationLine: 'underline',color:'blue'}}
            onPress={() => this.props.navigation.navigate("Page2Screen")}>Sign up Now</Text>
      </View>

      </View>
      </ImageBackground>
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
    backgroundColor: '#004e92',
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
  nameInput: {
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

});

export default Page1;
