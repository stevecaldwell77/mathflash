import { fromJS } from 'immutable';
import { LOGIN_SUCCESS, LOGOUT, LOGOUT_COMPLETE } from './constants';

const initialState = fromJS({
    currentStudentId: undefined,
    loggingOut: false,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state
                .set('currentStudentId', fromJS(action.studentId));
        case LOGOUT:
            return initialState
                .set('loggingOut', true);
        case LOGOUT_COMPLETE:
            return initialState;
        default:
            return state;
    }
}

export default reducer;
