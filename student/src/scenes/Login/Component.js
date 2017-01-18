import React from 'react';
import { Container, Header, Icon, Grid } from "semantic-ui-react";
import Waiting from '../../features/Waiting';
import Form from './Form';

const Component = ({ waiting, students, errorMsg, onStudentChange }) => (
    <Container>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
                Welcome to MathFlash
            </Header.Content>
        </Header>
        <Grid centered columns={2}>
            <Grid.Column>
                <Form
                    students={students}
                    errorMsg={errorMsg}
                    onStudentChange={onStudentChange}
                />
            </Grid.Column>
        </Grid>
        { waiting && <Waiting /> }
    </Container>
);

Component.propTypes = {
    waiting: React.PropTypes.bool,
    students: React.PropTypes.array.isRequired,
    errorMsg: React.PropTypes.string,
    onStudentChange: React.PropTypes.func.isRequired,
};

export default Component;
