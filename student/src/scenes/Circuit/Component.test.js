import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import Component from './Component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const problem = {
        firstNumber: "5",
        secondNumber: "6",
        operator: "+",
    };
    shallow(<Component circuitId={1} elapsed={75} numCompleted={12} onStop={noop} problem={problem}/>, div);
});
