import { ADD_TRIP } from '../actions/trips';

const initialState = {
    trips: ['nyc', 'florida', 'cali']
}

export default function tripsReducer(state=initialState, action) {
    if (action.type === ADD_TRIP) {
        console.log('ACTION.TRIPS:', action.trips);
        return Object.assign({}, state, {
            trips: [...state.trips, action.trips]
        })
    }
    return state;
}