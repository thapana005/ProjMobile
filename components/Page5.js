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


class Page5 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       name: 'Name : ',
       email: 'Email : ',
       price: 10,
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

  onPressLux = () => {
    //let price = 10
    let present = Math.floor(Math.random() * 10)
    console.log(present.toString())
    if (present == 0) {
      let presentItem = "AK0"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 1) {
      let presentItem = "AK1"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 2) {
      let presentItem = "AK2"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 3) {
      let presentItem = "AK3"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 4) {
      let presentItem = "AK4"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 5) {
      let presentItem = "AK5"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 6) {
      let presentItem = "AK6"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 7) {
      let presentItem = "AK7"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 8) {
      let presentItem = "AK8"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 9) {
      let presentItem = "AK9"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        imageuri: "https://p3d.in/model_data/wideshot/ma1YD"
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

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>

        <Text style={styles.text}>Page5</Text>
        <Text style={styles.text}>Page5</Text>

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressLux}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Create</Text>
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

export default Page5;