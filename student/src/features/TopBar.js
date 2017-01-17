import React from 'react';
import { Grid, Button, Header, Icon, Segment } from "semantic-ui-react";

const TopBar = ({ currentStudentName, onLogoutClick }) => (
    <Segment inverted>
        <Grid columns={2}>
            <Grid.Column textAlign='left'>
                <Header inverted as='h2' color='grey'>
                    <Icon name='child' />
                    <Header.Content>
                        {currentStudentName}
                    </Header.Content>
                </Header>
            </Grid.Column>
            <Grid.Column textAlign='right'>
                <Button circular color='red' onClick={onLogoutClick}>Logout</Button>
            </Grid.Column>
        </Grid>
    </Segment>
);

TopBar.propTypes = {
    currentStudentName: React.PropTypes.string.isRequired,
    onLogoutClick: React.PropTypes.func.isRequired,
};

export default TopBar;
