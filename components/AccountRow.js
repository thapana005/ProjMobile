import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginRight:16,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 50,
    },
    title: {
        fontSize: 16,
        backgroundColor: 'transparent',
        alignSelf:'center',
        color:'#000000'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        borderRadius:10,
        paddingLeft:5,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#FFFFFF',
    },
    photo: {
        height: 120,
        width: 150,
        margin:5,
        alignItems: 'center'

    },
});

onchangePage = (rot, way) => {
    rot.navigate(way)
  }

const AccountRow = ({rot,boxPage,nameBox,price,image_url}) => (

    <View>
      <View style={styles.container}>
          <TouchableOpacity onPress={this.onchangePage.bind(this, rot, boxPage)}>
            <Text style={styles.title}>
                {nameBox}
            </Text>
          <Image source={{ uri: image_url }} style={styles.photo} />
            <View style={styles.container_text}>
            
            <Text style={styles.title}>
                {price}
            </Text>  
            </View>
          </TouchableOpacity>
      </View>
    </View>
);

export default AccountRow;