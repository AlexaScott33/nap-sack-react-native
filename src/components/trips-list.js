import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight  } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class TripsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripToDelete: ''
        }
    }

    deleteTrip() {
        let array = [...this.props.trips];
        // var index = array.indexOf(e.target.value);
        array.splice(array, 1);
        // let index = array.indexOf(e.target.value);
        console.log(array);
    }
    render() {
        // console.log('this is tripLists props:', this.props.trips);
        const swipeoutBtns = [
            {
                text: 'Delete',
                backgroundColor: 'red',
                onPress: () => { this.deleteTrip() }
            }
        ]
        const { navigate } = this.props.nav;
        const { textStyle, swipeButtonStyle } = styles;

        const tripsArr = this.props.trips.map((trip, index) => (
            <Swipeout right={swipeoutBtns} 
                      key={index} 
                      style={swipeButtonStyle}>
                    <TouchableHighlight 
                        onPress={() => navigate('Packing')}>
                            <Text style={textStyle}>{trip}</Text>
                    </TouchableHighlight>
            </Swipeout>
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
        marginLeft: 20
    },
    swipeButtonStyle: {
        backgroundColor: '#eeeeee'
    }
});


