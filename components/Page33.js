import React from 'react';
import { Constants, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,ImageBackground
} from 'react-native';
import database from './Database'
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'


class Page3 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       name: 'Name : ',
       email: 'Trade Link : ',
       imageuri :'https://i-love-png.com/images/img_191958_11550.png',
     };

  }

  onFocusFunction = async() => {
      //Alert.alert(this.props.navigation.state.params.userID)
      database.readAll2(this.props.navigation.state.params.userID, this.read_Account_success, this.read_Account_fail)
  }

  async componentDidMount () {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })
  }

  read_Account_success=async(account)=>{
    this.setState({ imageuri: account.imageuri });
    this.setState({ name: account.firstName });
    this.setState({ email: account.email});
  }

  read_Account_fail=async()=>{

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

  render() {
    return (

      <ImageBackground
      style={{ width: '100%', height: '100%' ,flex:1}}
      source={{uri: 'https://cdn.pixabay.com/photo/2015/08/07/12/34/background-879311_1280.jpg'}}
      >




        <View style={{flexDirection: 'row'}}>

          <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
             <Image source={require('./topHead.jpg')} styles={{height:'10%', width:'100%'}}>

              </Image>
          {/* <Text style={{textAlign:'center',marginTop:30,color:'white',fontSize:20}}>Profile </Text> */}
               <TouchableOpacity onPress={this.pickImage}>
               <Image
                   style={styles.imgStyles}
                   source={{uri:this.state.imageuri}}/>
                </TouchableOpacity>
        </View>

        </View>
        <View style={{flex:1}}>
        <TextInput style={styles.text}>{this.state.name}</TextInput>
        <TextInput style={styles.text12}>{this.state.email}</TextInput>

        <TouchableOpacity
        style={styles.touchableUser}
        onPress={this.onPressOK}>
        <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>OK</Text>
      </TouchableOpacity>
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
    borderWidth : 1,
    margin:5,
  },
  text: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      marginRight:5,
      marginLeft: 5,
      marginTop:35,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
      color: 'white',
  },
  text12: {
    alignItems: 'center',
    height:50,
    backgroundColor: 'transparent',
    padding: 10,
    margin:5,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    fontSize:20,
    color: 'white',
},
  imgStyles: {
      width: 120,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
},
  touchableUser:{
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    borderColor:'white',
    backgroundColor: '#004e92',
    borderWidth : 1,
  },


});

export default Page3;
