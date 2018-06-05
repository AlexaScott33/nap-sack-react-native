import React from 'react';
import { StyleSheet, View, Text, ListView, TextInput, TouchableHighlight } from 'react-native';


export default class TripForm extends React.Component {

    onAdd() {
        console.log('pressing button!!')
    }
    
    render() {
        const { viewStyle, inputStyle, buttonStyle, buttonText } = styles;
        return (
            <View style={viewStyle}>
                <TextInput 
                    style={inputStyle}
                    placeholder='New Trip'>
                </TextInput>

                <TouchableHighlight 
                    style={buttonStyle}
                    onPress={this.onAdd.bind(this)}>
                    <Text style={buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#eeeeee',
        flex: 1
    },
    inputStyle: {
        height: 50,
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#87cefa'
     },
     buttonStyle: {
        height: 45,
        borderColor: '#87cefa',
        borderWidth: 2,
        backgroundColor: '#333',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    }
});