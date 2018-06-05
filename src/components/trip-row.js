import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TripRow extends React.Component {
    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.trip.place}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#919190',
        padding: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '300'
    }
})