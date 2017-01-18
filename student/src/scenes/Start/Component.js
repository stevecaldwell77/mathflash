import React from 'react';
import moment from 'moment';
import 'moment-duration-format';
import { Container, Button, Segment, Label, Statistic, Dimmer, Loader } from "semantic-ui-react";
import { formatDuration } from '../../util/formatting';
import TopBar from '../../features/TopBar';

const circuitStats = circuit => [
    { label: 'Time', value: formatDuration(circuit.elapsed) },
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

const Component = ({ circuitRequested, onStart, prevCircuit}) => (
    <Container textAlign="center">
        <TopBar />
        { prevCircuit && <PrevCircuitStats prevCircuit={prevCircuit} /> }
        <Button positive size='massive' onClick={onStart}>
          START
        </Button>
        { circuitRequested && Waiting }
    </Container>
);

Component.propTypes = {
    onStart: React.PropTypes.func.isRequired,
    circuitRequested: React.PropTypes.bool,
    prevCircuit: React.PropTypes.shape({
        elapsed: React.PropTypes.number.isRequired,
        numCompleted: React.PropTypes.number.isRequired,
    }),
};

export default Component;
