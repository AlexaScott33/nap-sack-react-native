import React from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { addtrip } from '../actions/trips';

import TripRow from './trip-row';

export default class TripsList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.trips)
        };
    }

    renderRow(trip) {
        return (
            <TripRow trip={trip} nav={this.props.nav} />
        )
    }
    
    render() {
        //const tripsArr = this.props.trips.map(trip => <Text>{trip}</Text>);
        // console.log('state logging from TripList', this.state);
        // console.log('TripLists Comp props:', tripsArr);
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}>
                </ListView>
            </View>
        );
    }
}



