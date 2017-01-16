import React from 'react';
import { Container, Header, Icon, Dimmer, Loader, Grid } from "semantic-ui-react";
import LoginForm from './Login/LoginForm';

const Login = ({ fetchingStudents }) => (
    <Container>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
                Welcome to MathFlash
            </Header.Content>
        </Header>
        { fetchingStudents ? (
            <Dimmer active>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        ) : (
            <Grid centered columns={2}>
                <Grid.Column>
                    <LoginForm />
                </Grid.Column>
            </Grid>
        )}
    </Container>
);

Login.propTypes = {
    fetchingStudents: React.PropTypes.bool,
};

export default Login;
