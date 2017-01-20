import React from 'react';
import { Container, Grid, Divider, Progress, Statistic, Header, Button } from "semantic-ui-react";

import TopBar from '../../features/TopBar';
import Waiting from '../../features/Waiting';

const elapsedColor = elapsed => (
     elapsed  > 1 - 6.25 ? 'red'
    : elapsed > 1 - 12.5 ? 'orange'
    : elapsed > 1 - 25   ? 'yellow'
    : elapsed > 1 - 50   ? 'olive'
                         : 'green'
);

const StatsRow = ({elapsed, numCompleted}) => (
    <Grid verticalAlign="middle" centered>
        <Grid.Row>
            <Grid.Column width={13}>
                <Progress size="small" percent={elapsed} color={elapsedColor(elapsed)}/>
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

const Circuit = ({ onStop, elapsed, numCompleted, problem, waiting }) => (
    <Container textAlign="center">
        <TopBar />
        <StatsRow elapsed={elapsed} numCompleted={numCompleted} />
        <Divider />
        <Problem problem={problem} />
        <Divider />
        <StopButton onClick={onStop} />
        {waiting && <Waiting />}
    </Container>
);

Circuit.propTypes = {
    onStop: React.PropTypes.func.isRequired,
    elapsed: React.PropTypes.number.isRequired,
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
