import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import store from '../store';

import PackingList from './packing-list';

class Packing extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = store.getState();
    }

    render() {
        const { navigate } = this.props.navigation;
        const { viewStyle, textStyle, buttonStyle, buttonText } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>Packing List</Text>
                
                <PackingList items={this.props.items} nav={this.props.navigation}/>

                <TouchableHighlight 
                    style={buttonStyle}
                    onPress={() => navigate('PackingForm')}>
                    <Text style={buttonText}>Add Item</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.packingListReducer.items
    }
};

export default connect(mapStateToProps)(Packing);


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