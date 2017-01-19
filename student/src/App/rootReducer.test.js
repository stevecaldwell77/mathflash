import rootReducer from './rootReducer';

it('initial state', () => {
    const newState = rootReducer(undefined, {});
    expect(newState.toJS()).toEqual({
        entities: {
            students: [],
            circuits: [],
        },
        session: {},
        login: {
            errorMsg: undefined,
            formSubmitted: false,
        },
    });
});
