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
import AccountListview2 from './AccountListview2'

class PageAK extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       item:[],
       price: 100,
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
      let presentItem = "Black"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 1) {
      let presentItem = "PerseyN"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn9u5MRjjeyP89SkjAS2-0Q4MDjwLIeTcQNtaVGG_VXskrq9g8S6uMzPnSNl7ygjtmGdwUJqmcyS6w/360fx360f"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 2) {
      let presentItem = "Buzzka"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://www.freepnglogos.com/uploads/ak-47-png/ak-47-open-for-new-spectrum-case-and-get-csgo-skins-2.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 3) {
      let presentItem = "Lao"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://myrealdomain.com/images/ak-47-image-1.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 4) {
      let presentItem = "FT"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://images.g2a.com/newlayout/512x384/1x1x0/6c56920d6619/59120f0fae653aff8b07d38b"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 5) {
      let presentItem = "WW"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://i.ya-webdesign.com/images/awp-redline-png-4.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 6) {
      let presentItem = "Otmw101"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://images.g2a.com/newlayout/512x384/1x1x0/6c56920d6619/59120f0fae653aff8b07d38b"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 7) {
      let presentItem = "Catch"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 8) {
      let presentItem = "DDpM46"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png"
      }
      database.addItemtoInventory(Objectt, this.state.email, this.state.price, this.addItemComplete, this.addItemFail)
    } else if (present == 9) {
      let presentItem = "Buzz kill"
      let Objectt = {
        email: this.state.email,
        item: presentItem,
        nameBox: "RandomAK",
        times: timestampnow,
        imageuri: "https://www.freepnglogos.com/uploads/ak-47-png/ak-47-open-for-new-spectrum-case-and-get-csgo-skins-2.png"
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
          <Image source={require('./akBox.jpeg')} styles={{height:'10%', width:'100%'}}/>
        </View>
        
        <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
            <Image source={require('./runBox2.png')} styles={{height:'5%', width:'5%'}}/> 
        </View>

        <TouchableOpacity
        style={styles.touchableUser} onPress={this.onPressLux}>
        <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Open</Text>
      </TouchableOpacity>

        <View style ={styles.list}>
            <AccountListview2 itemList={this.state.item}/>
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

export default PageAK;
