import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { StoryProvider, loginJohnDoe } from '../util/stories';
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
        <StoryProvider state={loginJohnDoe({})}>
            <Start onStart={onStart} />
        </StoryProvider>
    ))
    .add('has previous circuit', () => (
        <StoryProvider state={loginJohnDoe({})}>
            <Start onStart={onStart} prevCircuit={prevCircuit} />
        </StoryProvider>
    ))
    .add('circuit requested', () => (
        <StoryProvider state={loginJohnDoe({})}>
            <Start onStart={onStart} prevCircuit={prevCircuit} circuitRequested={true} />
        </StoryProvider>
    ));
