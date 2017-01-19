import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState = {}) => {
    const middlewares = [
        sagaMiddleware,
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    const store = createStore(
        rootReducer,
        fromJS(initialState),
        compose(...enhancers)
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
