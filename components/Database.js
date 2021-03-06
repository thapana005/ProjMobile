import * as firebase from 'firebase';
import '@firebase/firestore';


import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");

const config = {
  apiKey: "AIzaSyDST-hvszDsUHFXoYa6lTpI9yCu-5aHVA0",
  authDomain: "my-project-93b53.firebaseapp.com",
  databaseURL: "https://my-project-93b53.firebaseio.com",
  projectId: "my-project-93b53",
  storageBucket: "my-project-93b53.appspot.com",
  messagingSenderId: "722573436771",
  appId: "1:722573436771:web:af531fad2695edb1b39556",
  measurementId: "G-V7Z7ZNEBKE"
};

class Database{

  constructor() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
          console.log("firebase apps initializeApp");
    } else {
        console.log("firebase apps already running...");
    }
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }
  putText(text,success_callback,fail_callback){
    db.transaction(
      tx => {
        tx.executeSql("Insert into items (done, value) values (0,?)", [text], (_, {insertId})=>success_callback(insertId),fail_callback());
      },
      null,
    );
  }

  getAllText(success_callback,fail_callback)
  {
    db.transaction(tx => {
      tx.executeSql("select * from items", [], (_, { rows:{_array} }) => success_callback(_array),fail_callback())
    }, null,);
  }

  getTodoText(success_callback,fail_callback)
  {
    db.transaction(tx => {
      tx.executeSql("select * from items where done =0", [], (_, { rows:{_array} }) => success_callback(_array),fail_callback())
    }, null,);
  }

  getDoneText(success_callback,fail_callback)
  {
    db.transaction(tx => {
      tx.executeSql("select * from items where done =1", [], (_, { rows:{_array} }) => success_callback(_array),fail_callback())
    }, null,);
  }

  getDoingText(success_callback,fail_callback)
  {
    db.transaction(tx => {
      tx.executeSql("select * from items where done =2", [], (_, { rows:{_array} }) => success_callback(_array),fail_callback())
    }, null,);
  }f

  getText(done,success_callback,fail_callback)
  {

  }

  deleteText(id)
  {
    db.transaction(tx => {
      tx.executeSql("delete from items where id = ?;",[id]);
    },);
  }

  updateText(id)
  {
    db.transaction(tx => {
      tx.executeSql("update items set done = 1 where id = ?;",[id]);
    },);
  }
  updateText2(id)
  {
    db.transaction(tx => {
      tx.executeSql("update items set done = 2 where id = ?;",[id]);
    },);
  }
  async readAll2(email,read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("Account").get().then(
      snapshot => {
        if (snapshot.empty) {
          read_Account_fail();
          return;
        }

        snapshot.forEach(doc => {
          if(email == doc.data().email) {
            read_Account_success(doc.data())
          }
        })

      }).catch(read_Account_fail());
  }

  async readAll3(read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("box").get().then(snap=>{
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

  getAccount=async()=>{
    firebase.firestore().collection('Account').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      }).catch(err => {
        console.log('Error getting documents', err);
      });
  }

  async getUserProfile(id, complete) {
    firebase.firestore().collection('Account').where('email', '==', id).get().then(snap => {
      if (snap.empty) {
        console.log("EMP")
      } else {
        snap.forEach(doc => {
          complete(doc.data())
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  // async getInventory(id, complete) {
  //   firebase.firestore().collection('Inventorys').where('email', '==', 'b@gmail.com').get().then(snap => {
  //     if (snap.empty) {
  //       console.log("EMP")
  //     } else {
  //       snap.forEach(doc => {
  //         complete(doc.data())
  //       })
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  async getInventory(id, complete) {
    firebase.firestore().collection('Inventorys').where('email', '==', id).onSnapshot(query => {
      query.docChanges().forEach(change => {
        if (change.type === 'added') {
          complete(change.doc.data())
        }
      })
    })
  }

  async getInventoryUpdate(complete) {
    firebase.firestore().collection('Inventorys').orderBy("times").onSnapshot(query => {
      query.docChanges().forEach(change => {
        if (change.type === 'added') {
          complete(change.doc.data())
        }
      })
    })
  }
  
  async updateFund(eMail, Price, complete){
    firebase.firestore().collection('Account').where('email', '==', eMail).get().then(snap => {
      if (snap.empty) {
        console.log("EMP")
      } else {
        snap.forEach(doc => {
          console.log(doc.id)
          let plusMoney = doc.data().money + Price
          firebase.firestore().collection('Account').doc(doc.id).update({money: plusMoney}).then(complete())
        })
      }
    }).catch(err => {
      console.log(err)
    })

  }

  async minusFund(eMail, Price){
    firebase.firestore().collection('Account').where('email', '==', eMail).get().then(snap => {
      if (snap.empty) {
        console.log("EMP")
      } else {
        snap.forEach(doc => {
          console.log(doc.id)
          let plusMoney = doc.data().money - Price
          firebase.firestore().collection('Account').doc(doc.id).update({money: plusMoney})
        })
      }
    }).catch(err => {
      console.log(err)
    })

  }

  async updateProfile(profiles, complete){
    firebase.firestore().collection('Account').where('email', '==', profiles.email).get().then(snap => {
      if (snap.empty) {
        console.log("EMP")
      } else {
        snap.forEach(doc => {
          console.log('inUpdate Prof come')
          console.log(profiles)
          console.log('inUpdate Found')
          console.log(doc.data())
          firebase.firestore().collection('Account').doc(doc.id).update({firstName: profiles.firstName, imageuri: profiles.imageuri})
        })
      }
    }).catch(err => {
      console.log(err)
    })

  }

  async updateProfile2(profiles){
    firebase.firestore().collection('Account').where('email', '==', profiles.email).get().then(snap => {
      if (snap.empty) {
        console.log("EMP")
      } else {
        snap.forEach(doc => {
          console.log(doc.id)
          firebase.firestore().collection('Account').doc(doc.id).update({firstName: profiles.firstName})
        })
      }
    }).catch(err => {
      console.log(err)
    })

  }

  async readOnce(id,read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("Account").doc(id).get().then(doc=>{
      if(doc.exists)
      {
        read_Account_success(doc.data());
      }else {
        read_Account_fail();
      }
    }).catch(read_Account_fail());
  }

  async readAll(read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("Account").get().then(
      snapshot => {
        if (snapshot.empty) {
          read_Account_fail();
          return;
        }

        snapshot.forEach(doc => {
          read_Account_success(doc.data());
        })

      }).catch(read_Account_fail());
  }

  async readListening(read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection("Account").onSnapshot(
      snapshot => {
        if (snapshot.empty) {
          read_Account_fail();
          return;
        }

        snapshot.forEach(doc => {
          read_Account_success(doc.data());
        })

      }).catch(read_Account_fail());
  }

  async deleteAccount(id,delete_Account_success,delete_Account_fail)
  {
    try {
        firebase.firestore().collection('Account').doc(id).delete();
        delete_Account_success();
    } catch (e) {
        delete_Account_fail();
    }
  }

  async updateAccount(account,update_Account_success,update_Account_fail)
  {
    try {
        firebase.firestore().collection('Account').doc(id).update(account);
        update_Account_success();
    } catch (e) {
        update_Account_fail();
    }
  }

  async getUser(getUserComplete) {
    let user = firebase.auth().currentUser;
    let name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
      console.log("in get User")
      console.log(email)  // The user's ID, unique to the Firebase project. Do NOT use
                      // this value to authenticate with your backend server, if
                      // you have one. Use User.getToken() instead.
    }

    getUserComplete(user)
  }

  async addItemtoInventory(Obj, email, price, addItemComplete, addItemFail) {
    firebase.firestore().collection("Account").where('email', '==', email).get().then(snap => {
      if (snap.empty) {
        console.log("EMP")
      } else {
        snap.forEach(doc => {
          console.log("in openbox")
          console.log(doc.data().money)
          if (doc.data().money - price >= 0) {
            // addItemComplete(Obj);
            firebase.firestore().collection("Inventorys").add(Obj).then(addItemComplete(Obj.item));
          } else {
            addItemFail()
          }
        })
      }
    })
    //firebase.firestore().collection("Inventorys").add(Obj).then(addItemComplete(Obj.item));
  }

  // async addItemtoInventory2(Obj, addItemComplete2) {
  //   firebase.firestore().collection("Inventorys").add(Obj).then(addItemComplete2(Obj.item));
  // }


  async createAccount(Account,add_Account_success,add_Account_fail)
  {
    console.log(Account)
    firebase.firestore().collection("Account").add(Account).then(ref=>{add_Account_success(ref.id)},add_Account_fail);
  }

  async createAccount2(Account,add_Account_success,add_Account_fail)
  {
    firebase.firestore().collection("Account").doc("t1").set(Account).then(ref=>{add_Account_success(ref.id)},add_Account_fail);
  }

///////////
  async addMessage(message,add_Message_success,add_Message_fail)
  {
    firebase.firestore().collection("Message").add(message).then(ref=>{add_Message_success(ref.id)},add_Message_fail);
  }

  async readMessageListening(read_Message_success,read_Message_fail)
  {
    let getDoc = firebase.firestore().collection("Message").orderBy("time").onSnapshot(
      snapshot => {
        if (snapshot.empty) {
          read_Message_fail();
          return;
        }

        snapshot.forEach(doc => {
          read_Message_success(doc.data());
        })

      }).catch(read_Message_fail());
  }

  ///////////////////////////

  async createAut(account,createAut_success,createAut_fail)
  {
    firebase.auth()
      .createUserWithEmailAndPassword(account.email, account.password)
      .then(async()=> {

        createAut_success();

      }).catch(function(error){

        createAut_fail(error);

      });

  }

  login = async(account, success_callback, failed_callback) => {
    await firebase.auth().signInWithEmailAndPassword(account.email,account.password).then(function(){
      success_callback(account);
    }).catch(function(error) {
      failed_callback(error.message);
    })
  }

  async uploadImage(uri, name, success_callback, fail_callback,uploading_callback)
  {
      const response = await fetch(uri);
      const blob = await response.blob();

      var uploadTask = firebase.storage().ref('avatar').child(name).put(blob);

      uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        uploading_callback(progress)

      },
      function(error) {
        fail_callback(error.message);
      },
      async()=> {
         uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
           //console.log('upload success : '+downloadURL);
           //success_callback(downloadURL);
        });
      });
  }

}

////////////////

const database = new Database();
export default database;
