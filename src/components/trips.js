import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Trips extends React.Component {
    render() {
        const { textStyle } = styles;
        return (
            <View>
                <Text style={textStyle}>My Trips</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,

        
    }
})