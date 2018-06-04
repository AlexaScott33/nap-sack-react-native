import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>Nap Sack</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#87cefa',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        paddingTop: 25
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    }
})


