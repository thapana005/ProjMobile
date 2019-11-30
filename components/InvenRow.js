import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
    },
    title: {
        fontSize: 16,
        backgroundColor: 'transparent',
        alignSelf:'center'
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
        width: 190,
        margin:5,
        alignItems: 'center'

    },
});


const InvenRow = ({nameBox,item,image_url}) => (

    <View>
      <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.title}>
                {"Box: "+nameBox}
            </Text>
          <Image source={{ uri: image_url }} style={styles.photo} />
            <View style={styles.container_text}>
            
            <Text style={styles.title}>
                {item}
            </Text>  
            </View>
          </TouchableOpacity>
      </View>
    </View>
);

export default InvenRow;