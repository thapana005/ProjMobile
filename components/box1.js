import React from 'react';
import { Constants, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,ImageBackground,
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import AccountListview from './AccountListview'

class Page3 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       item:[],
       name: 'Name : ',
       email: 'Trade Link : ',
       imageuri :'https://i-love-png.com/images/img_191958_11550.png',
     };

  }
  read_Account_success=async(account)=>{
    this.setState({
      item:this.state.item.concat([{
        deviceName:this.state.devName,
        nameBox:account.name,
        price:account.price.toString(),
        image_url:account.boximageuri
      }])
    })
    console.log(account.name)
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
      source={{uri: 'https://cdn.pixabay.com/photo/2015/08/07/12/34/background-879311_1280.jpg'}}>

        <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
          <Image source={require('./m4Box.jpeg')} styles={{height:'10%', width:'100%'}}/>
        </View>
        
        <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
            <Image source={require('./ranBox1.png')} styles={{height:'5%', width:'5%'}}/> 
        </View>

        <TouchableOpacity
        style={styles.touchableUser}>
        <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Open</Text>
      </TouchableOpacity>










        <View style ={styles.list}>
            <AccountListview itemList={this.state.item}/>
        </View>

      </ImageBackground>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:5,
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
  list:{
    width:'98%',
    height:'90%',
    borderWidth : 1,
    borderColor:'white',
    borderRadius: 10,
    padding:10,
    margin:5,
    marginTop:30
  }


});

export default Page3;
