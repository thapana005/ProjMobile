import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import AccountRow3 from './AccountRow3';

const AccountListview3 = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={[
                    {key: 'Asiimov'},
                    {key: 'Bloodsport'},
                    {key: 'Neo-nior'},
                    {key: 'Bomberman'},
                    {key: 'F'},
                    {key: 'Jet-Lag32'},
                    {key: 'Krapowmoo'},
                    {key: 'Krapowkai'},
                    {key: 'Souls1'},
                    {key: 'Buzz kill'},
                  ]}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AccountListview3;
