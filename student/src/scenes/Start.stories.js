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

const buildComponent = (store) => (
    <StoryProvider store={store}>
        <Start onStart={onStart} />
    </StoryProvider>
);

storiesOf('Start', module)
    .add('no previous circuit', () => buildComponent(storeBegin))
    .add('has previous circuit', () => buildComponent(storePrevious))
    .add('circuit requested', () => buildComponent(storeWaiting));
