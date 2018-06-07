import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Dashboard extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>Welcome to Nap Sack </Text>
                <Button 
                    title='Start Planning'
                    onPress={() => navigate('Trips')}>
                </Button>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    viewStyle: {
        alignSelf: 'center',
        marginTop: 250
    },
     textStyle: {
         fontSize: 20
     }
})
