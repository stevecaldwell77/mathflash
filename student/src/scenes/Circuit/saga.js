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
} from './actions';

function* runTicker(circuit) {
    const { startTime, circuitId } = circuit.toJS();
    const endTime = startTime + (CIRCUIT_TIME * 1000);
    while (true) {
        const winner = yield race({
            finished: take([
                STOP_CIRCUIT,
                LOGOUT,
            ]),
            tick: call(delay, 250),
        });
        if (winner.finished) {
            break;
        }
        if (Date.now() > endTime) {
            yield put(stopCircuit(circuitId));
            break;
        }
        yield put(circuitTick());
    }
}

function* beginCircuit({ circuit }) {
    yield runTicker(circuit);
}

export default function* saga() {
    yield [
        takeLatest(CIRCUIT_READY, beginCircuit),
    ];
}
