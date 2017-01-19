import { fromJS } from 'immutable';
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
        case LOGIN_SUCCESS:
            return state
                .set('formSubmitted', false)
                .set('errorMsg', undefined);
        case LOGIN_ERROR:
            return state
                .set('formSubmitted', false)
                .set('errorMsg', action.errorMsg);
        default:
            return state;
    }
}

export default reducer;
