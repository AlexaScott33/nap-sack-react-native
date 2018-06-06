import { ADD_PACKING_ITEM } from '../actions/packing';

const initialState = {
    items: ['toothbrush', 'socks']
}

export default function packingListReducer(state=initialState, action) {
    if (action.type === ADD_PACKING_ITEM) {
        return Object.assign({}, state, {
            items: action.items
        })
    }
    return state;
}