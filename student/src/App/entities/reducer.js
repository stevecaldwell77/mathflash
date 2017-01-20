import { fromJS } from 'immutable';
import { LOGOUT } from '../session/constants';
import { LOAD_STUDENTS_SUCCESS } from './constants';

const initialState = fromJS({
    students: {},
    circuits: {},
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STUDENTS_SUCCESS:
            return state
                .set('students', fromJS(action.students));
        case LOGOUT:
            return state
                .set('circuits', fromJS([]));
        default:
            return state;
    }
};

export default reducer;
