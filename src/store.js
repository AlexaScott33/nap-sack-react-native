import { createStore } from 'redux';
import tripsReducer from './reducers/trips';

export default createStore(
    tripsReducer,
);
