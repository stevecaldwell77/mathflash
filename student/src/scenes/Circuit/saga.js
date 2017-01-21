import { delay } from 'redux-saga';
import { put, takeLatest, race, take, call } from 'redux-saga/effects';
import { CIRCUIT_READY } from '../Start/constants';
import { LOGOUT } from '../../App/session/constants';
import {
    // NEW_PROBLEM,
    // NEW_PROBLEM_READY,
    STOP_CIRCUIT,
    CIRCUIT_TIME,
} from './constants';
import {
    circuitTick,
    stopCircuit,
    circuitComplete,
} from './actions';

function* runTicker(circuit) {
    const { startTime } = circuit;
    const endTime = startTime + (CIRCUIT_TIME * 1000);
    while (true) {
        const winner = yield race({
            complete: take([
                STOP_CIRCUIT,
                LOGOUT,
            ]),
            tick: call(delay, 250),
        });
        if (winner.complete) {
            break;
        }
        if (Date.now() > endTime) {
            yield put(stopCircuit());
            break;
        }
        yield put(circuitTick());
    }
}

function* beginCircuit({ circuit }) {
    yield runTicker(circuit);
}

function* endCircuit() {
    yield delay(1000);
    yield put(circuitComplete());
}

export default function* saga() {
    yield [
        takeLatest(CIRCUIT_READY, beginCircuit),
        takeLatest(STOP_CIRCUIT, endCircuit),
    ];
}
