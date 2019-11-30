import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import AccountRow from './AccountRow';

const AccountListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <AccountRow
                    rot={item.rot}
                    boxPage={item.boxPage}
                    nameBox={item.nameBox}
                    price={item.price}
                    image_url={item.image_url}
                />}
            />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AccountListview;