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
        width: 120,
        margin:5,
        alignItems: 'center'

    },
});


const AccountRow3 = ({nameBox,price,image_url}) => (

    <View>
      <View style={styles.container}>
          <TouchableOpacity>
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

export default AccountRow3;


//  https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU0naHKIj9D7oTgl4LelaGnMuqIwDgFusR337HCpYmhiwzm8ktqMjv2INKLMlhprbp6CTE/256fx256f
// https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUxnaPLJz5H74y1xtTcz6etNumIx29U6Zd3j7yQoYih3lG1-UJqY27xJIeLMlhpaD9Aclo/256fx256f

