import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import {
    LOAD_STUDENTS,
    LOGIN,
} from './constants';
import {
    loadStudentsSuccess,
    loginSuccess,
    // loginError,
} from './actions';

const students = {
    '1': {
        studentId: '1',
        studentName: 'Isla',
    },
    '2': {
        studentId: '2',
        studentName: 'Sean',
    },
    '3': {
        studentId: '3',
        studentName: 'Kevin',
    },
};

function* fetchStudents(action) {
    yield delay(1000);
    yield put(loadStudentsSuccess(students));
}

function* loginStudent(action) {
    yield delay(1000);
    yield put(loginSuccess(action.studentId));
    // yield put(loginError('There was an error'));
}

export default function* saga() {
    yield [
        takeLatest(LOAD_STUDENTS, fetchStudents),
        takeLatest(LOGIN, loginStudent),
    ]
}
