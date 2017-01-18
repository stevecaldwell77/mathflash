import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { stubTopBarContainer } from '../stubs';

// import "semantic-ui-css/semantic.css";

stubTopBarContainer();
const Circuit = require('./Circuit').default;

const onStop = action('stop');

storiesOf('Circuit', module)
    .add('circuit', () => (
        <Circuit
            onStop={onStop}
            elapsed={20000}
            numCompleted={15}
            problem={{
                firstNumber: 6,
                secondNumber: 7,
                operator: '+',
            }}
        />
    ))
    .add('circuit nearing end', () => (
        <Circuit
            onStop={onStop}
            elapsed={59000}
            numCompleted={25}
            problem={{
                firstNumber: 12,
                secondNumber: 9,
                operator: '+',
            }}
        />
    ));
