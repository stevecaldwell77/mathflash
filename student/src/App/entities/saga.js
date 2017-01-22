import { delay } from 'redux-saga';
import { put, takeLatest, select } from 'redux-saga/effects';
import {
    LOAD_STUDENTS,
} from './constants';
import {
    loadStudents,
    loadStudentsSuccess,
    circuitClosed,
} from './actions';
import { getCircuitById } from './selectors';
import { STOP_CIRCUIT } from '../../scenes/Circuit/constants';

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

function* closeCircuit(action) {
    const { circuitId, timestamp } = action;
    yield delay(1000);

    // NOTE: we're only using selector in leiu of getting data from API
    const existingCircuit = yield select(getCircuitById, circuitId);

    const updatedCircuit = existingCircuit
        .set('endTime', timestamp);
    yield put(circuitClosed(updatedCircuit));
}

export default function* saga() {
    yield [
        startup(),
        takeLatest(LOAD_STUDENTS, fetchStudents),
        takeLatest(STOP_CIRCUIT, closeCircuit),
    ];
}
