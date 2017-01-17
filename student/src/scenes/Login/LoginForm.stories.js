import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { StoryProvider, loadStudents } from '../../util/stories';
import LoginForm from './LoginForm';

import "semantic-ui-css/semantic.css";

const onSubmit = action('submit');

storiesOf('LoginForm', module)
    .add('ready', () => (
        <StoryProvider state={loadStudents({})}>
            <LoginForm onSubmit={onSubmit}/>
        </StoryProvider>
    ))
    .add('loading', () => {
        let state = {
            login: {
                formSubmitted: true,
            }
        };
        state = loadStudents(state);
        return <StoryProvider state={state}>
            <LoginForm onSubmit={onSubmit} />
        </StoryProvider>
    })
    .add('error', () => {
        let state = {
            login: {
                errorMsg: 'Unknown Error Occurred',
            }
        };
        state = loadStudents(state);
        return <StoryProvider state={state}>
            <LoginForm onSubmit={onSubmit} />
        </StoryProvider>
    });
