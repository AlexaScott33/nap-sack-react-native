import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight  } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class PackingList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tripToDelete: ''
    //     }

    // }

    // deleteItem() {
    //     let array = [...this.props.items];
    //     // var index = array.indexOf(e.target.value);
    //     array.splice(array, 1);
    //     // let index = array.indexOf(e.target.value);
    //     console.log(array);
    // }
    render() {
        const swipeoutBtns = [
            {
                text: 'Delete',
                backgroundColor: 'red',
                // onPress: () => { this.deleteItem() }
            }
        ]
        const { navigate } = this.props.nav;
        const { textStyle, swipeButtonStyle } = styles;

        const itemsArr = this.props.items.map((item, index) => (
            <Swipeout right={swipeoutBtns} 
                      key={index} 
                      style={swipeButtonStyle}>
                    <TouchableHighlight 
                        onPress={() => navigate('Packing')}>
                            <Text style={textStyle}>{item}</Text>
                    </TouchableHighlight>
            </Swipeout>
        ));
        return (
            <View>
                {itemsArr}
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


