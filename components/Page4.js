import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight, ImageBackground
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import AccountListview from './AccountListview'


class Page4 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       item: [],
       name: 'Name : ',
       email: 'Email : ',
       imageuri :'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU0naHKIj9D7oTgl4LelaGnMuqIwDgFusR337HCpYmhiwzm8ktqMjv2INKLMlhprbp6CTE/256fx256f',
     };

  }

  async componentDidMount () {
    this.setV()
    database.getInventoryUpdate(this.getInventoryUpdateComplete)
  }

  getInventoryUpdateComplete=async(gett)=>{
    this.setState({ name: gett.email })
    this.setState({ imageuri: gett.imageuri })
  }

  read_Account_success=async(account)=>{
    const navigate = this.props.navigation;
    this.setState({
      item:this.state.item.concat([{
        rot: navigate,
        boxPage:account.boxPage,
        nameBox:account.name,
        price:account.price.toString(),
        image_url:account.boximageuri
      }])
    })
    console.log(account.name)
  }

  read_Account_fail=async()=>{

  }

  setV=()=>{
    //database.readListening(this.read_Account_success, this.read_Account_fail)
    // this.setState({ nameBox: this.state.name})
    // this.setState({ price: this.state.name})
    database.readAll3(this.read_Account_success, this.read_Account_fail)
  }

  onchangePage = () => {
    this.props.navigation.navigate("PageAKScreen",{userID: account.email})
  }

  

  render() {
    return (

      <ImageBackground
      style={{ width: '100%', height: '100%' ,flex:1}}
      source={{uri: 'https://cdn.pixabay.com/photo/2015/08/07/12/34/background-879311_1280.jpg'}}>

        <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
          <Image source={require('./mainTop.jpeg')} styles={{height:'10%', width:'100%'}}/>
        </View>
      
        <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
          <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>{this.state.name}</Text>
          <Image style={styles.imgStyles} source={{uri: this.state.imageuri}}/>
        </View>

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
      width: 190,
      height: 120,
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
  }

});
export default Page4;