import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from './';

it('component without crashing', () => {
  const div = document.createElement('div');
  const scene = () => <div>hello world</div>;
  ReactDOM.render(<Component Scene={scene} />, div);
});
