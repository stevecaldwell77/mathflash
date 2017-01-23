import { fromJS } from 'immutable';
import {
    CIRCUIT_TICK,
} from './constants';

const initialState = fromJS({
    tickTime: undefined,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CIRCUIT_TICK:
            return state
                .set('tickTime', Date.now())
        default:
            return state;
    }
}

export default reducer;
