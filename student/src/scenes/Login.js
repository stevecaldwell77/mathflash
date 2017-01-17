import React from 'react';
import { connect } from '../util/redux';
import { Container, Header, Icon, Dimmer, Loader, Grid } from "semantic-ui-react";
import LoginForm from './Login/LoginForm';

const mapState = ({ login = {} }) => ({
    studentsLoaded: login.studentsLoaded,
});

const Login = ({ studentsLoaded }) => (
    <Container>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
                Welcome to MathFlash
            </Header.Content>
        </Header>
        { studentsLoaded ? (
            <Grid centered columns={2}>
                <Grid.Column>
                    <LoginForm />
                </Grid.Column>
            </Grid>
        ) : (
            <Dimmer active>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        )}
    </Container>
);

Login.propTypes = {
    studentsLoaded: React.PropTypes.bool,
};

export default connect(
    mapState,
)(Login);
