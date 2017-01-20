import { fromJS } from 'immutable';
import { LOGOUT } from '../session/constants';
import { LOAD_STUDENTS_SUCCESS } from './constants';
import { CIRCUIT_READY } from '../../scenes/Start/constants';

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
                .set('circuits', fromJS({}));
        case CIRCUIT_READY:
            return state
                .setIn(
                    ['circuits', action.circuit.circuitId],
                    action.circuit,
                );
        default:
            return state;
    }
};

export default reducer;
