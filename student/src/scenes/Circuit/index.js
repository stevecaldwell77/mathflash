import React from 'react';
import { connect } from 'react-redux';
import { chain } from 'lodash';
import Component from './Component';

const stop = () => {};

const activeCircuit = state =>
    chain(state)
    .get('entities.circuits', {})
    .values()
    .filter(c => !c.endTime)
    .sortBy(c => c.startTime)
    .last()
    .value();

const elapsed = (state, asOf = Date.now) => (
    asOf - activeCircuit(state).startTime
);

const sceneState = state => state.circuit || {};
const stopRequested = state => sceneState(state).stopRequested;
const loadingProblem = state => sceneState(state).loadingProblem;
const waiting = state => (
    stopRequested(state) ||
    loadingProblem(state) ||
    false
);

export const mapState = (state, options = {}) => {
    const circuit = activeCircuit(state);
    const { asOf } = options;
    const sceneState = state.circuit || {};
    return {
        elapsed: elapsed(state, asOf),
        numCompleted: circuit.numCompleted,
        problem: circuit.currentProblem,
        waiting: waiting(state),
    };
};

const actions = {
    onStop: stop,
};

export default connect(
    mapState,
    actions,
)(Component);
