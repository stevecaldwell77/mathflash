import React from 'react';
import ReactDOM from 'react-dom';
import Waiting from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Waiting />, div);
});
