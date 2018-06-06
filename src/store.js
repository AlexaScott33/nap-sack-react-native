import { createStore, combineReducers } from 'redux';
import tripsReducer from './reducers/trips';
import packingListReducer from './reducers/packing';

export default createStore(
    tripsReducer
);

// export default createStore(
//     combineReducers({
//         tripsReducer,
//         packingListReducer
//     })
// );


