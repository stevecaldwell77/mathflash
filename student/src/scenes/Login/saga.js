import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import {
    LOGIN,
} from './constants';
import {
    loginSuccess,
    // loginError,
} from './actions';

function* loginStudent(action) {
    yield delay(1000);
    yield put(loginSuccess(action.studentId));
    // yield put(loginError('There was an error'));
}

export default function* saga() {
    yield [
        takeLatest(LOGIN, loginStudent),
    ]
}
