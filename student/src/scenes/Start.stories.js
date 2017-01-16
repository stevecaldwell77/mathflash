import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Start from './Start';

import "semantic-ui-css/semantic.css";

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
