import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './header';
import Trips from './trips';


export default class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <Text>This is my Dashboard component</Text>
                <Header />
                <Trips />
            </View>
        );
    }
}