import { delay } from 'redux-saga';
import { race, take, call, put, takeLatest } from 'redux-saga/effects';
import { CIRCUIT_READY } from '../../../App/entities/constants';
import { LOGOUT } from '../../../App/session/constants';
import { STOP_CIRCUIT } '../constants';
import { CIRCUIT_TIME } './constants';
import { stopCircuit } from '../actions';
import { circuitTick } from './actions';

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
