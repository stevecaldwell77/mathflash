import rootReducer from './rootReducer';

it('initial state', () => {
    const newState = rootReducer(undefined, {});
    expect(newState.toJS()).toEqual({
        entities: {
            students: {},
            circuits: {},
        },
        session: {
            currentStudentId: undefined,
            loggingOut: false,
        },
        login: {
            errorMsg: undefined,
            formSubmitted: false,
        },
        start: {
            waitingForCircuit: false,
        },
        circuit: {
            stopRequested: false,
            loadingProblem: false,
            numCompleted: undefined,
            currentProblem: undefined,
            timer: {
                tickTime: undefined,
            }
        },
    });
});
