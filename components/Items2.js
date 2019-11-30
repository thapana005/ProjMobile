import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";

import * as SQLite from 'expo-sqlite';

import database from './Database'


const db = SQLite.openDatabase("db.db");
class Items2 extends React.Component {
  state = {
    items: null
  };

  componentDidMount() {
    this.update();
  }

  get_text_success=async(arr)=>{
    this.setState({ items: arr })
  }

  get_text_fail=async(error)=>{
      console.log(error);
  }


  update() {
    database.getTodoText(this.get_text_success,this.get_text_fail);
  }

  render() {
    //const { done: doneHeading } = this.props;
    const { items } = this.state;
    const heading = "Todo";

    if (items === null || items.length === 0) {
      return null;
    }

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Want</Text>
        {items.map(({ id, done, value }) => (
          <TouchableOpacity
            key={id}
            onPress={() => this.props.onPressTodo(id)}
            style={{
              backgroundColor: "#fff",
              borderColor: "#000",
              borderWidth: 1,
              padding: 8
            }}
          >
            <Text style={{ color:"#000" }}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  flexRow: {
    flexDirection: "row"
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  }
});

export default Items2
