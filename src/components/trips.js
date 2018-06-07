import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import store from '../store';

import TripsList from './trips-list';

class Trips extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = store.getState();
    }

    render() {
        console.log('this is trips props:', this.props.trips);
        const { navigate } = this.props.navigation;
        const { viewStyle, textStyle, buttonStyle, buttonText } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>My Trips</Text>
                
                <TripsList trips={this.props.trips} nav={this.props.navigation}/>

                <TouchableHighlight 
                    style={buttonStyle}
                    onPress={() => navigate('TripForm')}>
                    <Text style={buttonText}>Add Trip</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trips: state.tripsReducer.trips
    }
};

export default connect(mapStateToProps)(Trips);


const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        backgroundColor: '#eeeeee',
        flex: 1,
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 10
    },
     buttonStyle: {
        height: 45,
        borderColor: '#87cefa',
        borderWidth: 2,
        backgroundColor: '#333',        
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    }
});




