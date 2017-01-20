import { combineReducers } from 'redux-immutable';

import entitiesReducer from './entitiesReducer';
import sessionReducer from './session/reducer';
import loginReducer from '../scenes/Login/reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    login: loginReducer,
});
