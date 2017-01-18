import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { stubTopBar } from '../../stubs';

import "semantic-ui-css/semantic.css";

stubTopBar();
const Component = require('./Component').default;

const onStop = action('stop');

storiesOf('Circuit', module)
    .add('circuit', () => (
        <Component
            onStop={onStop}
            elapsed={20000}
            numCompleted={15}
            problem={{
                firstNumber: '6',
                secondNumber: '7',
                operator: '+',
            }}
        />
    ))
    .add('circuit nearing end', () => (
        <Component
            onStop={onStop}
            elapsed={59000}
            numCompleted={25}
            problem={{
                firstNumber: '12',
                secondNumber: '9',
                operator: '+',
            }}
        />
    ))
    .add('waiting', () => (
        <Component
            onStop={onStop}
            elapsed={45000}
            numCompleted={20}
            problem={{
                firstNumber: '2',
                secondNumber: '3',
                operator: '+',
            }}
            waiting
        />
    ));
