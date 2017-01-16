import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from './Login';

import "semantic-ui-css/semantic.css";

storiesOf('Login', module)
    .add('fetching students', () => (
        <Login fetchingStudents={true}/>
    ))
    .add('students fetched', () => (
        <Login fetchingStudents={false}/>
    ));
