import { toPairs } from 'lodash';
import React from 'react';
import moment from 'moment';
import 'moment-duration-format';
import { Container, Button, Segment, Label, Statistic, Dimmer, Loader } from "semantic-ui-react";
import { connect } from '../util/redux';

import TopBar from '../features/TopBar';

const start = () => {};

const getPrevCircuit = state => {
    if (!state.entities) return undefined;
    if (!state.entities.circuits) return undefined;
    return toPairs(state.entities.circuits).reduce((prev, [id, circuit]) => {
        if (!prev.endTime) return circuit;
        if (!circuit.endTime) return prev;
        if (circuit.startTime > prev.startTime) return circuit;
        return prev;
    }, {});
};

const mapState = (state) => {
    let circuitRequested;
    if (state.start) {
        circuitRequested = state.start.circuitRequested;
    }

    return {
        circuitRequested,
        prevCircuit: getPrevCircuit(state),
    };
};

const actions = {
    onStart: start,
};

const duration = (start, end) => {
    const numSeconds = parseInt((end - start) / 1000);
    return moment.duration(numSeconds, 'seconds').format('mm:ss');
};

const circuitStats = circuit => [
    { label: 'Time', value: duration(circuit.startTime, circuit.endTime) },
    { label: 'Completed', value: circuit.numCompleted },
];

const Waiting = <Dimmer active>
    <Loader size='large'>Waiting</Loader>
</Dimmer>;

const PrevCircuitStats = ({ prevCircuit }) => {
    const stats = circuitStats(prevCircuit);
    return <Segment>
        <Label>Previous Circuit</Label>
        <Statistic.Group widths={stats.length} items={stats} color='blue' />
    </Segment>;
};

const Start = ({ circuitRequested, onStart, prevCircuit}) => (
    <Container textAlign="center">
        <TopBar />
        { prevCircuit && <PrevCircuitStats prevCircuit={prevCircuit} /> }
        <Button positive size='massive' onClick={onStart}>
          START
        </Button>
        { circuitRequested && Waiting }
    </Container>
);

Start.propTypes = {
    onStart: React.PropTypes.func.isRequired,
    circuitRequested: React.PropTypes.bool,
    prevCircuit: React.PropTypes.object,
};

export default connect(
    mapState,
    actions,
)(Start);
