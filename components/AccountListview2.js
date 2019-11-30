import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import AccountRow2 from './AccountRow2';

const AccountListview2 = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={[
                    {key: 'Black'},
                    {key: 'PerseyN'},
                    {key: 'BuzzKa'},
                    {key: 'Lao'},
                    {key: 'FT'},
                    {key: 'WW'},
                    {key: 'Otmw101'},
                    {key: 'Catch'},
                    {key: 'DDpM46'},
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

export default AccountListview2;
