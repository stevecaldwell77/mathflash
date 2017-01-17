import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { stubLoginForm } from '../stubs';

stubLoginForm();
const Login = require('./Login').default;

import "semantic-ui-css/semantic.css";

storiesOf('Login', module)
    .add('fetching students', () => (
        <Login studentsLoaded={false}/>
    ))
    .add('students fetched', () => (
        <Login studentsLoaded={true}/>
    ));
