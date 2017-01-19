import { createStore } from 'redux';
import { fromJS } from 'immutable';

export default (initialState = {}) => {
    const store = createStore(
        (state) => state,
        fromJS(initialState),
    );

    return store;
};
