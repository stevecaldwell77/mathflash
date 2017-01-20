import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { START_CIRCUIT } from './constants';
import { circuitReady } from './actions';
import { getRandomInt } from '../../util/math';

const newCircuit = () => ({
    circuitId: getRandomInt(1, 100000),
    startTime: Date.now(),
    numCompleted: 0,
    currentProblem: {
        firstNumber: getRandomInt(0, 9),
        secondNumber: getRandomInt(0, 9),
        operator: '+',
    },
})

function* fetchCircuit() {
    yield delay(1000);
    yield put(circuitReady(newCircuit()));
}

export default function* saga() {
    yield [
        takeLatest(START_CIRCUIT, fetchCircuit),
    ];
}
