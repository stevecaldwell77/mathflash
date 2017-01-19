import { fromJS } from 'immutable';
import { LOGIN_SUCCESS } from '../scenes/Login/constants';

const initialState = fromJS({});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state
                .set('currentStudentId', fromJS(action.studentId));
        default:
            return state;
    }
}

export default reducer;
