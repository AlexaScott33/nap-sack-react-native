import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

import TripsList from './trips-list';

export default class Trips extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trips: [
                {
                    place: 'New Zealand'
                },
                {
                    place: 'Italy'
                },
                {
                    place: 'NYC'
                },
            ]
        };
    }

    onAdd() {
        console.log('pressing button!!')
    }
    render() {
        const { viewStyle, textStyle, inputStyle, buttonStyle, buttonText } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>My Trips</Text>
                <TextInput 
                    style={inputStyle}
                    placeholder='New Trip'>
                </TextInput>

                <TouchableHighlight 
                    style={buttonStyle}
                    onPress={this.onAdd.bind(this)}>
                    <Text style={buttonText}>Add</Text>
                </TouchableHighlight>

                <TripsList trips={this.state.trips}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        backgroundColor: '#eeeeee',
        flex: 1
    },
    textStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 10
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
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    }
})

