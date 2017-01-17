import React from 'react';
import { Container, Header, Icon, Dimmer, Loader, Grid } from "semantic-ui-react";
import LoginFormContainer from './Login/LoginFormContainer';

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
                    <LoginFormContainer />
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

export default Login;
