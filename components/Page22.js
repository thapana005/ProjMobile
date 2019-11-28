import React from 'react';
import { Constants, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker';
import database from './Database'

class Page2 extends React.Component {

  constructor (props){
     super (props);
     this.state ={
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       imageuri:'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',
     };

  }

  onPressAddAccount = () => {
    account={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password,
      imageuri:this.state.imageuri,
    }

    console.log(account);
    database.createAccount(account,this.add_Account_success,this.add_Account_fail);
    database.uploadImage(this.state.imageuri,this.state.firstName,this.upload_success,this.upload_fail);
    this.props.navigation.navigate("Page1Screen")
  };

  add_Account_success=async(id)=>{
    database.createAut(account,this.add_Aut_success,this.add_Aut_fail);
  }

  add_Account_fail=async()=>{

  }

  add_Aut_success=async()=>{

  }

  add_Aut_fail=async(error)=>{

  }
  success_callback(){

  }

  fail_callback(){

  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });;

    if (!result.cancelled) {
      this.setState({ imageuri: result.uri });
    }
};


  onChangeTextFirstName = firstName => this.setState({ firstName });
  onChangeTextLastName = lastName => this.setState({ lastName });
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' ,flex:1}}
        source={{uri: 'https://cdn.pixabay.com/photo/2015/08/07/12/34/background-879311_1280.jpg'}}
      >




        <View style={{flexDirection: 'row'}}>

          <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>

          {/* <Text style={{textAlign:'center',marginTop:30,color:'white',fontSize:20}}>Profile </Text> */}
               <TouchableOpacity onPress={this.pickImage}>
               <Image
                   style={styles.imgStyles}
                   source={{uri:this.state.imageuri}}/>
                </TouchableOpacity>
        </View>

        </View>
        <View style={{flex:1}}>
        

        <TextInput
          style={styles.nameInput}
          placeholder="First Name"
          onChangeText={this.onChangeTextFirstName}/>

        <TextInput
          style={styles.nameInput}
          placeholder="Last Name"
          onChangeText={this.onChangeTextLastName}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Email"
          onChangeText={this.onChangeTextEmail}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Password"
          onChangeText={this.onChangeTextPassword}
        />

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressAddAccount}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Create</Text>
        </TouchableOpacity>

        
        </View>
    
      </ImageBackground>
 

    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
    marginTop:20,
  },
  touchablePassword:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
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

  buttonText: {
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:30,
      color:'#ffffff'
  },
  imgStyles: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
  }
});

export default Page2;
