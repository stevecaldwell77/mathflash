import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { configureStore, StoryProvider, loginJohnDoe, addPrevCircuit } from '../util/stories';
import Start from './Start';

import "semantic-ui-css/semantic.css";

const onStart = action('start');

const storeBegin = configureStore(loginJohnDoe, {});
const storePrevious = configureStore(addPrevCircuit, loginJohnDoe, {});
const storeWaiting = configureStore(addPrevCircuit, loginJohnDoe, {
    start: {
        circuitRequested: true,
    },
});

storiesOf('Start', module)
    .add('no previous circuit', () => (
        <StoryProvider store={storeBegin}>
            <Start onStart={onStart} />
        </StoryProvider>
    ))
    .add('has previous circuit', () => (
        <StoryProvider store={storePrevious}>
            <Start onStart={onStart} />
        </StoryProvider>
    ))
    .add('circuit requested', () => (
        <StoryProvider store={storeWaiting}>
            <Start onStart={onStart} />
        </StoryProvider>
    ));
