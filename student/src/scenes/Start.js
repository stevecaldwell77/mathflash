import React from 'react';
import { Container, Button, Segment, Label, Statistic, Dimmer, Loader } from "semantic-ui-react";

import TopBar from '../features/TopBar';

const circuitStats = circuit => [
    { label: 'Time', value: '1:00'},
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

export default Start;
