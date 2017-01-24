import { fromJS } from 'immutable';
import { LOGOUT } from '../../App/session/constants';
import { CIRCUIT_READY } from '../../App/entities/constants';
import { START_CIRCUIT } from './constants';

const initialState = fromJS({
    waitingForCircuit: false,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_CIRCUIT:
            return state
                .set('waitingForCircuit', true);
        case CIRCUIT_READY:
            return state
                .set('waitingForCircuit', false);
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default reducer;
