import React from 'react';
import { Dropdown, Label, Container } from "semantic-ui-react";

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

export default LoginForm;
