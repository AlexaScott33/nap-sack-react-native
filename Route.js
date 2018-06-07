import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import Dashboard from './src/components/dashboard';
import Trips from './src/components/trips';
import TripForm from './src/components/trip-form';
import TripList from './src/components/trips-list';
import TripRow from './src/components/trip-row';
import PackingList from './src/components/packing-list';



export default createStackNavigator({
  Dashboard: { screen: Dashboard },
  Trips: { screen: Trips },
  TripForm: { screen: TripForm },
  PackingList: { screen: PackingList },
  TripList: { screen: TripList }
});



