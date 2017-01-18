import React from 'react';
import { Container, Grid, Divider, Progress, Statistic, Header, Button, Icon } from "semantic-ui-react";

import { formatDuration } from '../../util/formatting';
import TopBar from '../../features/TopBar';

const elapsedColor = elapsed => (
     elapsed > 55000  ? 'red'
    : elapsed > 50000 ? 'orange'
    : elapsed > 40000 ? 'yellow'
    : elapsed > 30000 ? 'olive'
                      : 'green'
);

const StatsRow = ({elapsed, numCompleted}) => (
    <Grid verticalAlign="middle" centered>
        <Grid.Row>
            <Grid.Column width={13}>
                <Progress size="small" percent={elapsed/60000*100} color={elapsedColor(elapsed)}/>
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

const Circuit = ({ onStop, elapsed, numCompleted, problem }) => (
    <Container textAlign="center">
        <TopBar />
        <StatsRow elapsed={elapsed} numCompleted={numCompleted} />
        <Divider />
        <Problem problem={problem} />
        <Divider />
        <Button circular color="red" onClick={onStop}><Icon name='stop' />STOP</Button>
    </Container>
);

Circuit.propTypes = {
    onStop: React.PropTypes.func.isRequired,
    elapsed: React.PropTypes.number.isRequired,
    numCompleted: React.PropTypes.number.isRequired,
    problem: React.PropTypes.object.isRequired,
};

export default Circuit;
