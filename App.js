import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Header from './src/components/header';
import Dashboard from './src/components/dashboard';
import Trips from './src/components/trips';


class App extends React.Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <View>
          <Header />
          <Dashboard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'black'
    // backgroundColor: '#fff9e0'
  },
});


export default createStackNavigator({
  Dashboard: { screen: Dashboard },
  Trips: { screen: Trips },
  Header: { screen: Header }
});



