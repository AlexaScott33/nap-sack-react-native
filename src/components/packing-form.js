import React from 'react';
import { StyleSheet, View, Text, ListView, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';


import { addTrip } from '../actions/trips';

export default class PackingForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         string: ''
    //     }

    // }

    // onChangeTextHandler(text) {
    //     this.setState({ 
    //         string: text 
    //     });
    // }

    render() {
        // console.log('TripForm Comp props:', this.props.trips);
        const { navigate } = this.props.navigation;
        const { viewStyle, inputStyle, buttonStyle, buttonText, cancelButton, cancelText } = styles;
        return (
            <View style={viewStyle}>
                <TextInput 
                    style={inputStyle}
                    // onChangeText={this.onChangeTextHandler.bind(this)}
                    placeholder='New Item'>
                </TextInput>

                <TouchableHighlight 
                    style={buttonStyle}
                    onPress={() => {
                        navigate('Packing')
                    }}>
                    <Text style={buttonText}>Add</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={cancelButton}
                    onPress={() => navigate('Packing')}>
                    <Text style={cancelText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

// const mapStateToProps = (state) => {    
//     return {
//         trips: state.trips
//     }
// };

// export default connect(mapStateToProps)(TripForm);

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#eeeeee',
        flex: 1,
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
        backgroundColor: '#87cefa',
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
    },
    cancelButton: {
        height: 45,
        backgroundColor: '#333',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    }
});