import { put } from 'redux-saga/effects';
import { loadStudents } from '../scenes/Login/actions';
import sessionSaga from './session/saga';
import loginSaga from '../scenes/Login/saga';
// import startSceneSaga from '../scenes/Start/saga';

function* startupSaga() {
    yield put(loadStudents());
}

export default function* rootSaga() {
    yield [
        sessionSaga(),
        loginSaga(),
        // startSceneSaga(),
        startupSaga(),
    ]
}
