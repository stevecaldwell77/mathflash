import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { stubTopBarContainer } from '../stubs';

import "semantic-ui-css/semantic.css";

stubTopBarContainer();
const Start = require('./Start').default;

const onStart = action('start');

const prevCircuit = {
    startTime: 1484599405,
    endTime: 1484599405 + 60000,
    numCompleted: 24,
};

storiesOf('Start', module)
    .add('no previous circuit', () => (
        <Start onStart={onStart} />
    ))
    .add('has previous circuit', () => (
        <Start onStart={onStart} prevCircuit={prevCircuit} />
    ))
    .add('circuit requested', () => (
        <Start onStart={onStart} prevCircuit={prevCircuit} circuitRequested={true} />
    ));
