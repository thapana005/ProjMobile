import React from 'react';
import { Constants, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,ImageBackground, Vibration
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import AccountListview3 from './AccountListview3'

class PageM4 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       item:[],
       price: 200,
       name: 'Name : ',
       email: 'Trade Link : ',
       imageuri :'https://i-love-png.com/images/img_191958_11550.png',
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

  onPressLux = () => {
    //let price = 10
    let present = Math.floor(Math.random() * 10)
    console.log(present.toString())
    let currentDate = new Date();
    let datee = currentDate.getDate();
    let monthh = currentDate.getMonth(); 
    let yearr = currentDate.getFullYear();
    let hourss = currentDate.getHours()
    let minutess = currentDate.getMinutes()
    let secondss = currentDate.getSeconds()
    let timestampnow = datee+"/"+monthh+"/"+yearr+" "+hourss+":"+minutess+":"+secondss
    if (present == 0) {
      let presentItem = "Asiimov"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a1_howling_light_large.c64a9fc9fa04b5d10d4b1e200135e59285c8a77c.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 1) {
      let presentItem = "Bloodsport"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "http://csgo.replays.net/uploads/picname/csgoskin/1113/9995ac024563.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 2) {
      let presentItem = "Neo-nior"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "http://csgo.replays.net/uploads/picname/csgoskin/1113/9995ac024563.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 3) {
      let presentItem = "Bomberman"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcE3_-YNJav69C7X85MGEAtJbyerOBFvjwxB3BRZTu81m8eb7d"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 4) {
      let presentItem = "F"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "https://g.fp.ps.netease.com/market/file/5c09d7697f9d2aa1970eb328Kq5DvOEi"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 5) {
      let presentItem = "Jet-Lag32"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLO77QgHJu5MRjjeyP8N-n2wfl_BVpYGn1cdWdJgJtNwuB_1LvlL3q0cO_6szBy3o3vigi7GGdwUJW4GV-dw/360fx360f"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 6) {
      let presentItem = "Krapowmoo"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszadDl95Nmuq4yCkP_gfbjVxDoEu8R3073AptyniwTm8kBqYWnxLI-ScwBvY1GE8wfsl7y61sei_MOeKVbcl-w/512fx384f"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 7) {
      let presentItem = "rapowkai"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "http://csgo.replays.net/uploads/picname/csgoskin/1113/80739f993279.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 8) {
      let presentItem = "Souls1"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "http://csgo.replays.net/uploads/picname/csgoskin/1114/182d7d081192.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 9) {
      let presentItem = "Buzz kill"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomM4",
        times: timestampnow,
        imageuri: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq4yCkP_gfb6IxDJT6pYo07HF89is2Aa3-RE4ZT_1ctTHdQE7Mg2D-la_xOvn18ei_MOeUwVqCl8/512fx384f"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    }
  }

  // addItemComplete=async(item)=>{
    
  // }

  addItemComplete=async(item)=>{
    console.log("Open complete!!")
    const DURATION = 10000;
    const PATTERN = [500];

    //Vibration.vibrate(DURATION);

    Vibration.vibrate(PATTERN);
    Alert.alert("You have found: "+item)
    database.minusFund(this.state.email, this.state.price)
  }

  addItemFail=async()=>{
    const DURATION = 10000;
    const PATTERN = [500];
    Vibration.vibrate(PATTERN);
    Alert.alert("You money not enough")
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
        style={styles.touchableUser} onPress={this.onPressLux}>
        <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Open</Text>
      </TouchableOpacity>

        <View style ={styles.list}>
            <AccountListview3 itemList={this.state.item}/>
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

export default PageM4;
