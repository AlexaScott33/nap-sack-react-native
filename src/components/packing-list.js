import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class PackingList extends React.Component {
    render() {
        const { textStyle } = styles;
        return (
            <View>
                <Text style={textStyle}>Packing List</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 10
    }
})