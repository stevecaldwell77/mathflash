import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import {
    loginSuccess,
    // loginError,
    logoutComplete,
} from './actions';
import { LOGIN, LOGOUT } from './constants';

function* loginStudent(action) {
    yield delay(1000);
    yield put(loginSuccess(action.studentId));
    // yield put(loginError('There was an error'));
}

function* logout() {
    yield delay(1000);
    yield put(logoutComplete());
}

export default function* saga() {
    yield [
        takeLatest(LOGIN, loginStudent),
        takeLatest(LOGOUT, logout),
    ];
}
