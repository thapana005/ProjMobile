import * as firebase from 'firebase';
import '@firebase/firestore';
//import { read } from 'fs';

const config = {
  apiKey: "AIzaSyDST-hvszDsUHFXoYa6lTpI9yCu-5aHVA0",
  authDomain: "my-project-93b53.firebaseapp.com",
  databaseURL: "https://my-project-93b53.firebaseio.com",
  projectId: "my-project-93b53",
  storageBucket: "my-project-93b53.appspot.com",
  messagingSenderId: "722573436771",
  appId: "1:722573436771:web:af531fad2695edb1b39556",
  measurementId: "G-V7Z7ZNEBKE"
}

class Database{

  constructor() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
          console.log("firebase apps initializeApp");
    } else {
        console.log("firebase apps already running...");
    }
  }

  getAccount=async()=>{
   
  }


  async readOnce(id,read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("Account").doc(id).get().then(doc=>{
      if(doc.exists) {
        read_Account_success(doc.data())
      } else {
        read_Account_fail()
      }
    }).catch(read_Account_fail())
  }

  async readAll(read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("Account").get().then(snap=>{
      if(snap.empty) {
        read_Account_fail()
        return;
      } else {
        snap.forEach(doc => {
          read_Account_success(doc.data())
        })
      }
    }).catch(read_Account_fail())
  }

  async readListening(read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("Account").onSnapshot(snap=>{
      if(snap.empty) {
        read_Account_fail()
        return;
      } else {
        snap.forEach(doc => {
          read_Account_success(doc.data())
        })
      }
    }).catch(read_Account_fail())
  }

  async testListening() {
    // let getDoc = firebase.firestore().collection("ChatMessage").orderByChild("Time").onSnapshot(snap => {
    //   snap.docChanges().forEach(change => {
    //     if(change.type === 'added') {
    //       console.log('New: ', change.doc.data())
    //     } if (change.type === 'modified') {
    //       console.log('Modified: ', change.doc.data())
    //     } if (change.type === 'removed') {
    //       console.log('Removed: ', change.doc.data())
    //     }
    //   })
    // })
    let getDoc = firebase.firestore().collection("ChatMessage").orderBy("Time")
    console.log(getDoc)
  }

  async insertMessage(Chat,sendMessage_success,sendMessage_fail) {
    console.log("come:", Chat)
    //firebase.firestore().collection("ChatMessage").doc(Chat.Name).set(Chat);
    try {
      firebase.firestore().collection("ChatMessage").add(Chat);
      sendMessage_success("OK")
    } catch (e) {
      sendMessage_fail("Check connection")
    }
  }

  async readListeningUpdate(read_Account_success,read_Account_fail) {
    let getDoc = firebase.firestore().collection("ChatMessage").orderBy("Time").onSnapshot(snap => {
      snap.docChanges().forEach(change => {
        if(change.type === 'added') {
          read_Account_success(change.doc.data())
          // console.log('New: ', change.doc.data())
        } if (change.type === 'modified') {
          // console.log('Modified: ', change.doc.data())
        } if (change.type === 'removed') {
          // console.log('Removed: ', change.doc.data())
        }
      })
    })
  }

  async deleteAccount(id,delete_Account_success,delete_Account_fail)
  {
    firebase.firestore().collection("Account").doc(id).delete().then(delete_Account_success()).catch(delete_Account_fail())
  }

  async updateAccount(account,update_Account_success,update_Account_fail)
  {
    firebase.firestore().collection("Account").doc(account.id).update(account).then(update_Account_success()).catch(update_Account_fail())
  }



  async createAccount(Account,add_Account_success,add_Account_fail)
  {
    firebase.firestore().collection("Account").add(Account).then(ref=>{add_Account_success}).catch(ref=>{add_Account_fail})
  }

  async createAccount2(Account,add_Account_success,add_Account_fail)
  {
    try {
      firebase.firestore().collection("Account").doc(Account.firstName).set(Account);
      add_Account_success("OK")
    } catch (e) {
      add_Account_fail()
    }
  }



}

const database = new Database();
export default database;
