import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import {
    LOAD_STUDENTS,
} from './constants';
import {
    loadStudents,
    loadStudentsSuccess,
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

function* startup() {
    yield delay(100);
    yield put(loadStudents());
}

export default function* saga() {
    yield [
        startup(),
        takeLatest(LOAD_STUDENTS, fetchStudents),
    ];
}