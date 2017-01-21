import { fromJS } from 'immutable';
import { LOGOUT } from '../../App/session/constants';
import {
    NEW_PROBLEM,
    NEW_PROBLEM_READY,
    CIRCUIT_TICK,
    STOP_CIRCUIT,
    CIRCUIT_COMPLETE,
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
        case CIRCUIT_COMPLETE:
            return initialState;
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default reducer;
