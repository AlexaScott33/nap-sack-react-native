import React from 'react';
import { StyleSheet, View, Text, ListView, TouchableHighlight  } from 'react-native';
import { connect } from 'react-redux';
import { addtrip } from '../actions/trips';


export default class TripsList extends React.Component {
    render() {
        const { navigate } = this.props.nav;
        const { touchStyle, textStyle } = styles;

        const tripsArr = this.props.trips.map(trip => (
                            <TouchableHighlight
                                onPress={() => navigate('PackingList')}>
                                 <Text style={textStyle}>{trip}</Text>
                            </TouchableHighlight>
        ));
        return (
            <View>
                {tripsArr}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: '300',
        borderWidth: 1,
        borderColor: '#919190',
        padding: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    }
});


