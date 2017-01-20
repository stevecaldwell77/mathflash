import { fromJS } from 'immutable';
import { LOGOUT } from '../../App/session/constants';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = fromJS({
    formSubmitted: false,
    errorMsg: undefined,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return state
                .set('formSubmitted', true)
                .set('errorMsg', undefined);
        case LOGIN_ERROR:
            return state
                .set('formSubmitted', false)
                .set('errorMsg', action.errorMsg);
        case LOGIN_SUCCESS:
            return initialState;
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default reducer;
