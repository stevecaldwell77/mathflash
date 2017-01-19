import { put } from 'redux-saga/effects';
import { loadStudents } from '../scenes/Login/actions';
import loginSaga from '../scenes/Login/saga';

function* startupSaga() {
    yield put(loadStudents());
}

export default function* rootSaga() {
    yield [
        loginSaga(),
        startupSaga(),
    ]
}
