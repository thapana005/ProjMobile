import React from 'react';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight, 
  ImageBackground
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


class Page3 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       name: 'Name : ',
       email: 'Email : ',
       cash: 'Cash: ',
       imageuri :'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',
     };

  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  onFocusFunction = async() => {
    //let mail = this.props.navigation.state.params.userID
    //console.log(this.props.navigation.getParam('userMail'))
      //Alert.alert(this.props.navigation.state.params.userID)
      //database.readAll2(this.props.navigation.state.params.userID, this.read_Account_success, this.read_Account_fail)
  }

  async componentDidMount () {
    this.getPermissionAsync();
    console.log('hi');
    database.getUser(this.getUserComplete)
  }

  getUserComplete=async(user)=>{
    database.getUserProfile(user.email,this.getUserProfileComplete)
  }

  getUserProfileComplete=async(user)=>{
    console.log("Page3")
    console.log(user)
    this.setState({ name: user.firstName });
    this.setState({ email: user.email});
    this.setState({ imageuri: user.imageuri });
    this.setState({ cash: user.money})
    // this.setState({email: user.email})
  }

  read_Account_success=async(account)=>{
    this.setState({ imageuri: account.imageuri });
    this.setState({ name: account.firstName });
    this.setState({ email: account.email});
    this.setState({ cash: account.money})
  }

  read_Account_fail=async()=>{

  }

  upload_success=async()=>{

  }

  upload_fail=async()=>{

  }

  onPressOK = () => {
    let profiles = {
      email: this.state.email,
      imageuri: this.state.imageuri,
      firstName: this.state.name
    }
    database.updateProfile(profiles,this.updateImgSuccess)
    database.uploadImage(this.state.imageuri,this.state.email,this.upload_success,this.upload_fail);
  }

  updateImgSuccess=async()=>{
    //database.updateProfile2()
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ imageuri: result.uri });
    }
  };

  onChangeTextName = name => this.setState({ name });
  onChangeTextEmail = email => this.setState({ email })
  // onChangeTextEmail = cash => this.setState({ cash })
  

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
                <Text style={styles.text123}>Cash: {this.state.cash}</Text>
          </View>


        </View>
        <View style={{flex:1}}>
        <TextInput style={styles.text} onChangeText={this.onChangeTextName}>{this.state.name}</TextInput>
        <TextInput style={styles.text12} onChangeText={this.onChangeTextEmail}>{this.state.email}</TextInput>

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
      marginTop:5,
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
text123: {
    alignItems: 'center',
    padding:10,
    width: 150,
    height:50,
    backgroundColor: 'transparent',
    margin:5,
    marginTop:10,
    borderRadius: 20,
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
