import { delay } from 'redux-saga';
import { put, takeLatest, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import {
    LOAD_STUDENTS,
} from './constants';
import { START_CIRCUIT } from '../../scenes/Start/constants';
import {
    loadStudents,
    loadStudentsSuccess,
    circuitReady,
    circuitClosed,
} from './actions';
import { getCircuitById } from './selectors';
import { STOP_CIRCUIT } from '../../scenes/Circuit/constants';
import { getRandomInt } from '../../util/math';

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

const newCircuit = () => (fromJS({
    circuitId: getRandomInt(1, 100000),
    startTime: Date.now(),
    numCompleted: 0,
    currentProblem: {
        firstNumber: getRandomInt(0, 9),
        secondNumber: getRandomInt(0, 9),
        operator: '+',
    },
}));

function* fetchStudents(action) {
    yield delay(1000);
    yield put(loadStudentsSuccess(students));
}

function* startup() {
    yield delay(100);
    yield put(loadStudents());
}

function* fetchCircuit() {
    yield delay(1000);
    yield put(circuitReady(newCircuit()));
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
        takeLatest(START_CIRCUIT, fetchCircuit),
        takeLatest(STOP_CIRCUIT, closeCircuit),
    ];
}
