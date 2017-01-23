import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import "semantic-ui-css/semantic.css";

const Component = require('./Component').default;

storiesOf('Circuit/Timer', module)
    .add('25%', () => (
        <Component elapsed={25} />
    ))
    .add('55%', () => (
        <Component elapsed={55} />
    ))
    .add('80%', () => (
        <Component elapsed={80} />
    ))
    .add('90%', () => (
        <Component elapsed={90} />
    ))
    .add('95%', () => (
        <Component elapsed={95} />
    ));
