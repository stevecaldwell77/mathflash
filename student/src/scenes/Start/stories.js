import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { stubTopBar } from '../../stubs';

import "semantic-ui-css/semantic.css";

stubTopBar();
const Component = require('./Component').default;

const onStart = action('start');

const prevCircuit = {
    elapsed: 60000,
    numCompleted: 24,
};

storiesOf('Start', module)
    .add('no previous circuit', () => (
        <Component onStart={onStart} />
    ))
    .add('has previous circuit', () => (
        <Component onStart={onStart} prevCircuit={prevCircuit} />
    ))
    .add('circuit requested', () => (
        <Component onStart={onStart} prevCircuit={prevCircuit} circuitRequested={true} />
    ));
