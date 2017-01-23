import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import Component from './Component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<Component elapsed={25} />, div);
});
