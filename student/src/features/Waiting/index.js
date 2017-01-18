import React from 'react';
import { Dimmer, Loader } from "semantic-ui-react";

export default () => (
    <Dimmer active>
        <Loader size='large'>Loading</Loader>
    </Dimmer>
);
