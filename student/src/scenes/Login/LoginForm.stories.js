import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LoginForm from './LoginForm';

import "semantic-ui-css/semantic.css";

const students = [
    { id: 1, name: 'Isla' },
    { id: 2, name: 'Sean' },
    { id: 3, name: 'Kevin' },
];

const onSubmit = action('submit');

storiesOf('LoginForm', module)
    .add('ready', () => (
        <LoginForm students={students} onSubmit={onSubmit}/>
    ))
    .add('loading', () => (
        <LoginForm students={students} onSubmit={onSubmit} loading={true}/>
    ))
    .add('error', () => (
        <LoginForm students={students} onSubmit={onSubmit} errorMsg='Unknown Error Occurred'/>
    ));
