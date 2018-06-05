import React from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';

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
            <TripRow trip={trip} />
        )
    }
    render() {
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

// TripsList.propTypes = {
//     trips: React.PropTypes
//         .arrayOf(React.PropTypes.object).isRequired
// };
