import React from 'react';
import { Constants, Permissions } from 'expo';
import {
  StyleSheet, Text,ScrollView,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,ImageBackground, Vibration
} from 'react-native';
import database from './Database'
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import Items2 from './Items2'
import Items3 from './Items3'
import Items4 from './Items4'

class Page7 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       name: 'Name : ',
       email: 'Trade Link : ',
       imageuri :'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',
       price: ''
     };

  }
  state = {
    text: null
  };

  // componentDidMount() {
  //   this.update();
  // }

  onChangeText = text => this.setState({ text });

  onPressAdd = () => {
    this.addText();
    this.setState({ text: null });
  };

  addText() {
    if (this.state.text === null || this.state.text === "") {
      return false;
    }
    database.putText(this.state.text,this.add_text_success,this.add_text_fail);

  };

  add_text_success=async()=>{
    this.update();
  }

  add_text_fail=async(error)=>{
      console.log(error);
  }

  change_Complete=(id)=>{
    database.updateText(id);
    this.update();
  }

  change_doin=(id)=>{
    database.updateText2(id);
    this.update();
  }

  delete_Complete=(id)=>{
    database.deleteText(id);
    this.update()
  }

  update (){
    this.todo.update();
    this.todoin.update();
    this.todone.update();
  };
  async componentDidMount () {
    // this.focusListener = this.props.navigation.addListener('didFocus', () => {
    //   this.onFocusFunction()
    // })
    this.update();
    database.getUser(this.getUserComplete)
  }

  getUserComplete=async(user)=>{
    this.setState({ email: user.email })
    console.log(user.email)
  }

  onPressAddFund= () => {
        if (this.state.price != "") {
            let priceSend = parseInt(this.state.price, 10)
            database.updateFund(this.state.email, priceSend, this.addFundComplete);
        }
    }

addFundComplete=async()=>{
  console.log("Open complete!!")
  const DURATION = 10000;
  const PATTERN = [500];

  //Vibration.vibrate(DURATION);

  Vibration.vibrate(PATTERN);
  Alert.alert("Add Fund Complete")
  //Vibration.vibrate(PATTERN, true);
  //Vibration.cancel();
}

onChangeTextPrice = price => this.setState({price});

  render() {
    return (

      <ImageBackground
      style={{ width: '100%', height: '100%' ,flex:1}}
      source={{uri: 'https://cdn.pixabay.com/photo/2015/08/07/12/34/background-879311_1280.jpg'}}>

      
      

        <View style={{flexDirection: 'row'}}>

            <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
                <Image source={require('./addHead.jpeg')} styles={{height:'10%', width:'100%'}}/>
            </View>

        </View>
        <View style={{}}>
        <TextInput style={styles.text1} onChangeText={this.onChangeTextPrice}></TextInput>

        <TouchableOpacity
        style={styles.touchableUser}
        onPress={this.onPressAddFund}>
        <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>OK</Text>
      </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center'}}>
          <TextInput
              style={styles.text1}
              placeholder="Note what is you want."
              onChangeText={this.onChangeText}/>

          <TouchableOpacity
              style={styles.touchableUser}
              onPress={this.onPressAdd}>
              <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Note</Text>
          </TouchableOpacity>

          <ScrollView style={styles.listArea}>
          <Items2
                  ref={todo =>( this.todo=todo)}

                  onPressTodo={this.change_doin}
          />
          <Items4
                  ref={todoin =>( this.todoin=todoin)}

                  onPressDoin={this.change_Complete}
          />      
          <Items3
                  ref={todone =>( this.todone=todone)}
  
                  onPressComplate={this.delete_Complete}
          />
        </ScrollView>
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
  text1: {
    alignItems: 'center',
    height:50,
    backgroundColor: 'transparent',
    padding: 10,
    marginTop:60,
    marginBottom:5,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    fontSize:20,
    color: 'white',
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

export default Page7;
