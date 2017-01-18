import React from 'react';
import { Container, Header, Icon, Dimmer, Loader, Grid } from "semantic-ui-react";
import Form from './Form';

const Component = ({ waiting, students, errorMsg, onStudentChange }) => (
    <Container>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
                Welcome to MathFlash
            </Header.Content>
        </Header>
        { waiting ? (
            <Dimmer active>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        ) : (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Form
                        students={students}
                        errorMsg={errorMsg}
                        onStudentChange={onStudentChange}
                    />
                </Grid.Column>
            </Grid>
        )}
    </Container>
);

Component.propTypes = {
    waiting: React.PropTypes.bool,
    students: React.PropTypes.array,
    errorMsg: React.PropTypes.string,
    onStudentChange: React.PropTypes.func.isRequired,
};

export default Component;
