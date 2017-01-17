import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { StoryProvider, loginJohnDoe, addPrevCircuit } from '../util/stories';
import Start from './Start';

import "semantic-ui-css/semantic.css";

const onStart = action('start');

storiesOf('Start', module)
    .add('no previous circuit', () => (
        <StoryProvider state={loginJohnDoe({})}>
            <Start onStart={onStart} />
        </StoryProvider>
    ))
    .add('has previous circuit', () => {
        let state = {};
        state = loginJohnDoe(state);
        state = addPrevCircuit(state);
        return <StoryProvider state={state}>
            <Start onStart={onStart} />
        </StoryProvider>
    })
    .add('circuit requested', () => {
        let state = {
            start: {
                circuitRequested: true,
            },
        };
        state = loginJohnDoe(state);
        state = addPrevCircuit(state);
        return <StoryProvider state={state}>
            <Start onStart={onStart} />
        </StoryProvider>
    });
