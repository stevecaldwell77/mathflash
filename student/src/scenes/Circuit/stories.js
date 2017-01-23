import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { stubTopBar, stubCircuitTimer } from '../../stubs';

import "semantic-ui-css/semantic.css";

stubTopBar();
stubCircuitTimer();

const Component = require('./Component').default;

const onStop = action('stop');

storiesOf('Circuit', module)
    .add('circuit', () => (
        <Component
            onStop={onStop}
            circuitId={1}
            numCompleted={15}
            problem={{
                firstNumber: '6',
                secondNumber: '7',
                operator: '+',
            }}
        />
    ))
    .add('waiting', () => (
        <Component
            onStop={onStop}
            circuitId={1}
            numCompleted={20}
            problem={{
                firstNumber: '2',
                secondNumber: '3',
                operator: '+',
            }}
            waiting
        />
    ));
