import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dashboard from './src/components/dashboard';

export default class App extends React.Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff9e0'
  },
});
