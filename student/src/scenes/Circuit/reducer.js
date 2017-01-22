import { fromJS } from 'immutable';
import { LOGOUT } from '../../App/session/constants';
import { CIRCUIT_READY } from '../Start/constants';
import {
    NEW_PROBLEM,
    NEW_PROBLEM_READY,
    CIRCUIT_TICK,
    STOP_CIRCUIT,
} from './constants';

const initialState = fromJS({
    stopRequested: false,
    loadingProblem: false,
    tickTime: undefined,
    startTime: undefined,
    numCompleted: undefined,
    currentProblem: undefined,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CIRCUIT_READY:
            return initialState;
        case NEW_PROBLEM:
            return state
                .set('loadingProblem', true);
        case NEW_PROBLEM_READY:
            return state
                .set('loadingProblem', false)
                .set('currentProblem', fromJS(action.problem));
        case CIRCUIT_TICK:
            return state
                .set('tickTime', Date.now())
        case STOP_CIRCUIT:
            return state
                .set('stopRequested', true);
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default reducer;
