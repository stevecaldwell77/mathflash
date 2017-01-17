import { toPairs } from 'lodash';
import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import LoginForm from './LoginForm';

const login = () => {};

const mapState = (state) => {
    let students = [];
    if (state.entities && state.entities.students) {
        const studentEntities = state.entities.students;
        students = toPairs(studentEntities).map(([id, obj]) => ({
            id,
            name: obj.studentName,
        }));
    }

    let loading;
    if (state.login) {
        loading = state.login.formSubmitted;
    }

    let errorMsg;
    if (state.login) {
        errorMsg = state.login.errorMsg;
    }

    return {
        students,
        loading,
        errorMsg,
    };
};

const actions = {
    onSubmit: login,
};

export default mayBeStubbed(
    connect(
        mapState,
        actions,
    )(LoginForm)
);
