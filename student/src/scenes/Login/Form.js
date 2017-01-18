import React from 'react';
import { Dropdown, Label, Container } from "semantic-ui-react";

const options = (students) => students.map(student => ({
    text: student.name,
    value: student.id,
}));

const Form = ({ students = [], onStudentChange, errorMsg }) => (
    <Container>
        <Label>Student Login</Label>
        <Dropdown
            fluid
            selection
            options={options(students)}
            placeholder='Choose One'
            onChange={onStudentChange}
            error={errorMsg && errorMsg.length > 0}
        />
        { errorMsg &&
            <Label basic color='red' pointing>{errorMsg}</Label>
        }
    </Container>
);

Form.propTypes = {
    students: React.PropTypes.array,
    errorMsg: React.PropTypes.string,
    onStudentChange: React.PropTypes.func.isRequired,
};

export default Form;
