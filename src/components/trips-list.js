import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

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
            <Text>{trip.place}</Text>
        )
    }
    render() {
        // const { viewStyle, textStyle } = styles;
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