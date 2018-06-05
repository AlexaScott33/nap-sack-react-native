import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default class Trips extends React.Component {
    render() {
        const { viewStyle, textStyle, inputStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>My Trips</Text>
                <TextInput 
                    style={inputStyle}
                    placeholder='New Trip'></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10
    },
    textStyle: {
        fontSize: 25,
        alignSelf: 'center'
    },
     inputStyle: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
     }
})