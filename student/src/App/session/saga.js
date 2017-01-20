import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { logoutComplete } from './actions';
import { LOGOUT } from './constants';

function* logout() {
    yield delay(1000);
    yield put(logoutComplete());
}

export default function* saga() {
    yield [
        takeLatest(LOGOUT, logout),
    ];
}
