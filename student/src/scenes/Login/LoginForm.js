import React from 'react';
import { toPairs } from 'lodash';
import { connect } from '../../util/redux';
import { Dropdown, Label, Container } from "semantic-ui-react";

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

const options = (students) => students.map(student => ({
    text: student.name,
    value: student.id,
}));

const LoginForm = ({ students = [], onSubmit, loading, errorMsg }) => (
    <Container>
        <Label>Student Login</Label>
        <Dropdown
            fluid
            selection
            loading={loading}
            options={options(students)}
            placeholder='Choose One'
            onChange={onSubmit}
            disabled={loading}
            error={errorMsg && errorMsg.length > 0}
        />
        { errorMsg &&
            <Label basic color='red' pointing>{errorMsg}</Label>
        }
    </Container>
);

LoginForm.propTypes = {
    students: React.PropTypes.array,
    onSubmit: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errorMsg: React.PropTypes.string,
};

export default connect(
    mapState,
)(LoginForm);
