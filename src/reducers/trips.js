import { ADD_TRIP } from '../actions/trips';

const initialState = {
    trips: ['nyc', 'cali', 'florida']
}

export default function tripsReducer(state=initialState, action) {
    if (action.type === ADD_TRIP) {
        return Object.assign({}, state, {
            trips: action.trips
        })
    }
    return state;
}