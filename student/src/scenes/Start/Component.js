import React from 'react';
import { Container, Button, Segment, Label, Statistic } from "semantic-ui-react";
import { formatDuration } from '../../util/formatting';
import TopBar from '../../features/TopBar';
import Waiting from '../../features/Waiting';

const circuitStats = circuit => [
    { label: 'Time', value: formatDuration(circuit.elapsed) },
    { label: 'Completed', value: circuit.numCompleted },
];

const PrevCircuitStats = ({ prevCircuit }) => {
    const stats = circuitStats(prevCircuit);
    return <Segment>
        <Label>Previous Circuit</Label>
        <Statistic.Group widths={stats.length} items={stats} color='blue' />
    </Segment>;
};

const Component = ({ waiting, onStart, prevCircuit}) => (
    <Container textAlign="center">
        <TopBar />
        { prevCircuit && <PrevCircuitStats prevCircuit={prevCircuit} /> }
        <Button positive size='massive' onClick={onStart}>
          START
        </Button>
        { waiting && <Waiting /> }
    </Container>
);

Component.propTypes = {
    onStart: React.PropTypes.func.isRequired,
    waiting: React.PropTypes.bool,
    prevCircuit: React.PropTypes.shape({
        elapsed: React.PropTypes.number.isRequired,
        numCompleted: React.PropTypes.number.isRequired,
    }),
};

export default Component;
