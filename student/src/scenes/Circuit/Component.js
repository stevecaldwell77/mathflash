import React from 'react';
import { Container, Grid, Divider, Statistic, Header, Button } from "semantic-ui-react";

import TopBar from '../../features/TopBar';
import Waiting from '../../features/Waiting';
import Timer from './Timer';

const StatsRow = ({numCompleted}) => (
    <Grid verticalAlign="middle" centered>
        <Grid.Row>
            <Grid.Column width={13}>
                <Timer />
            </Grid.Column>
            <Grid.Column width={3}>
                <Statistic color="blue" size="mini">
                  <Statistic.Value>{numCompleted}</Statistic.Value>
                  <Statistic.Label>Completed</Statistic.Label>
                </Statistic>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const Problem = ({problem}) => (
    <Grid style={{fontSize: "7em"}}>
        <Grid.Row textAlign="left">
            <Grid.Column width={8} />
            <Grid.Column width={4}>
                <Header>{problem.firstNumber}</Header>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="left">
            <Grid.Column width={6} />
            <Grid.Column width={2}>
                <Header>{problem.operator}</Header>
            </Grid.Column>
            <Grid.Column width={4}>
                <Header>{problem.secondNumber}</Header>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const StopButton = ({ onClick }) => (
    <Button
        circular
        color="red"
        onClick={onClick}
        content='Stop'
        icon='stop'
    />
);

const Circuit = ({ onStop, circuitId, numCompleted, problem, waiting }) => (
    <Container textAlign="center">
        <TopBar />
        <StatsRow numCompleted={numCompleted} />
        <Divider />
        <Problem problem={problem} />
        <Divider />
        <StopButton onClick={() => onStop(circuitId)} />
        {waiting && <Waiting />}
    </Container>
);

Circuit.propTypes = {
    onStop: React.PropTypes.func.isRequired,
    circuitId: React.PropTypes.number.isRequired,
    numCompleted: React.PropTypes.number.isRequired,
    problem: React.PropTypes.shape({
        firstNumber: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
        ]).isRequired,
        secondNumber: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
        ]).isRequired,
        operator: React.PropTypes.string.isRequired,
    }).isRequired,
    waiting: React.PropTypes.bool,
};

export default Circuit;
