import { fromJS } from 'immutable';
import { LOGOUT } from '../../App/session/constants';
import { CIRCUIT_READY } from '../../App/entities/constants';
import {
    NEW_PROBLEM,
    NEW_PROBLEM_READY,
    STOP_CIRCUIT,
} from './constants';
import timerReducer from './Timer/reducer';

const initialState = fromJS({
    stopRequested: false,
    loadingProblem: false,
    numCompleted: undefined,
    currentProblem: undefined,
    timer: undefined,
});

const mainReducer = (state, action) => {
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
        case STOP_CIRCUIT:
            return state
                .set('stopRequested', true);
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

const reducer = (state = initialState, action) =>
    mainReducer(state, action)
        .set('timer', timerReducer(state.get('timer'), action));

export default reducer;
