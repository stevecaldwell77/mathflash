import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { logoutComplete } from './actions';
import { LOGOUT } from './constants';
import { loadStudents } from '../scenes/Login/actions';
import loginSaga from '../scenes/Login/saga';
// import startSceneSaga from '../scenes/Start/saga';

function* logout() {
    yield delay(1000);
    yield put(logoutComplete());
}

function* sessionSaga() {
    yield put(loadStudents());
    yield takeLatest(LOGOUT, logout);
}

export default function* rootSaga() {
    yield [
        loginSaga(),
        // startSceneSaga(),
        sessionSaga(),
    ]
}
