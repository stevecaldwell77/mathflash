import { noop } from 'lodash';
import React from 'react';
const LoginForm = require('../scenes/Login/LoginForm').default;

export default () => <LoginForm students={[]} onSubmit={noop}/>
