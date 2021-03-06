import { combineReducers } from 'redux-immutable';

import entitiesReducer from './entities/reducer';
import sessionReducer from './session/reducer';
import loginReducer from '../scenes/Login/reducer';
import startReducer from '../scenes/Start/reducer';
import circuitReducer from '../scenes/Circuit/reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    login: loginReducer,
    start: startReducer,
    circuit: circuitReducer,
});
