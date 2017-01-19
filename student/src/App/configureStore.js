import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from './rootReducer';

export default (initialState = {}) => {
    const store = createStore(
        rootReducer,
        fromJS(initialState),
    );
    return store;
};
