import { createStackNavigator } from 'react-navigation';

import Dashboard from './src/components/dashboard';
import Trips from './src/components/trips';
import TripForm from './src/components/trip-form';
import TripList from './src/components/trips-list';
import Packing from './src/components/packing';
import PackingForm from './src/components/packing-form';



export default createStackNavigator({
  Dashboard: { screen: Dashboard },
  Trips: { screen: Trips },
  TripForm: { screen: TripForm },
  TripList: { screen: TripList },
  Packing: { screen: Packing },
  PackingForm: { screen: PackingForm }
});



