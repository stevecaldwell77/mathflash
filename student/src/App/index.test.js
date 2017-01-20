import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { mapState, Component } from './';
import Waiting from '../features/Waiting';
import Login from '../scenes/Login';
import Start from '../scenes/Start';
import Circuit from '../scenes/Circuit';

it('component without crashing', () => {
    const div = document.createElement('div');
    const scene = () => <div>hello world</div>;
    ReactDOM.render(<Component Scene={scene} />, div);
});

test('mapState: choose circuit scene', () => {
    const state = fromJS({
        entities: {
            students: {
                '1': {
                    studentName: 'John Doe',
                },
            },
            circuits: {
                '1': {
                    startTime: 10,
                }
            },
        },
        session: {
            currentStudentId: '1',
        }
    });
    const result = mapState(state);
    expect(result).toEqual({
        Scene: Circuit,
    });
});

test('mapState: choose start scene', () => {
    const state = fromJS({
        entities: {
            students: {
                '1': {
                    studentName: 'John Doe',
                },
            },
            circuits: {
                '1': {
                    startTime: 10,
                    endTime: 20,
                }
            },
        },
        session: {
            currentStudentId: '1',
        }
    });
    const result = mapState(state);
    expect(result).toEqual({
        Scene: Start,
    });
});

test('mapState: choose login scene', () => {
    const state = fromJS({
        entities: {
            students: {
                '1': {
                    studentName: 'John Doe',
                },
            },
            circuits: {
            },
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        Scene: Login,
    });
});

test('mapState: choose waiting scene', () => {
    const state = fromJS({
        entities: {
            students: {},
            circuits: {},
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        Scene: Waiting,
    });
});
