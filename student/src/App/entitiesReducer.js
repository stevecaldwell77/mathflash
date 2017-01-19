import { fromJS } from 'immutable';
import { LOAD_STUDENTS_SUCCESS } from '../scenes/Login/constants';

const initialState = fromJS({
    students: [],
    circuits: [],
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STUDENTS_SUCCESS:
            return state
                .set(students, fromJS(action.students));
        default:
            return state;
    }
};

export default reducer;
