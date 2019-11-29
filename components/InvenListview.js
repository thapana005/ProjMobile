import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import InvenRow from './InvenRow';

const InvenListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <InvenRow
                    nameBox={item.nameBox}
                    item={item.item}
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

export default InvenListview;