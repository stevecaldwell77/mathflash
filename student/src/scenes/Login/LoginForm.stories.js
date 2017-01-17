import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { configureStore, StoryProvider, loadStudents } from '../../util/stories';
import LoginForm from './LoginForm';

import "semantic-ui-css/semantic.css";

const onSubmit = action('submit');

const storeReady = configureStore(loadStudents, {});
const storeLoading = configureStore(loadStudents, {
    login: {
        formSubmitted: true,
    }
});
const storeError = configureStore(loadStudents, {
    login: {
        errorMsg: 'Unknown Error Occurred',
    }
});

const buildComponent = (store) => (
    <StoryProvider store={store}>
        <LoginForm onSubmit={onSubmit}/>
    </StoryProvider>
);

storiesOf('LoginForm', module)
    .add('ready', () => buildComponent(storeReady))
    .add('loading', () => buildComponent(storeLoading))
    .add('error', () => buildComponent(storeError));
