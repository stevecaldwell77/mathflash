import React from 'react';
import moment from 'moment';
import 'moment-duration-format';
import { Container, Button, Segment, Label, Statistic, Dimmer, Loader } from "semantic-ui-react";
import { formatDuration } from '../util/formatting';
import TopBarContainer from '../features/TopBarContainer';

const duration = (start, end) => formatDuration(end - start);

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
        <TopBarContainer />
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

export default Start;
