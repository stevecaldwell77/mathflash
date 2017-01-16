import React from 'react';
import { Dropdown, Label, Container } from "semantic-ui-react";

const options = (students) => students.map(student => ({
    text: student.name,
    value: student.id,
}));

const onChange = (e) => console.log(e.target);

const LoginForm = ({ students = [], onSubmit, loading, error }) => (
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
            error={error}
        />
        { error &&
            <Label basic color='red' pointing>{error}</Label>
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
