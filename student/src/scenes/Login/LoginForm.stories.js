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

storiesOf('LoginForm', module)
    .add('ready', () => (
        <StoryProvider store={storeReady}>
            <LoginForm onSubmit={onSubmit}/>
        </StoryProvider>
    ))
    .add('loading', () => (
        <StoryProvider store={storeLoading}>
            <LoginForm onSubmit={onSubmit} />
        </StoryProvider>
    ))
    .add('error', () => (
        <StoryProvider store={storeError}>
            <LoginForm onSubmit={onSubmit} />
        </StoryProvider>
    ));
