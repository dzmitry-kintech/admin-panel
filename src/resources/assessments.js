import React from "react";
import {Datagrid, DisabledInput, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, NumberInput, FunctionField} from "react-admin";

const AssessmentFilter = props => (
    <Filter {...props}>
        <TextInput label="Filter by Id" source="id" alwaysOn/>
    </Filter>
);

export const AssessmentList = props => (
    <List {...props} filters={<AssessmentFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => record.email} secondaryText={record => `id: ${record.id} | deleted: ${record.deleted}`}/>}
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Owner Email" source="ownerEmail"/>
                    <TextField label="Quiz Id" source="quizId"/>
                    <TextField label="Answers" source="answers"/>
                    <TextField label="Score" source="score"/>
                    <TextField label="Total" source="total"/>
                    <TextField label="Right" source="right"/>
                    <FunctionField label="Is FirstAttempt" render={record => record.isFirstAttempt ? 'yes' : 'no'}/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const ERROR_FIELD_IS_REQUIRED = 'The field is required';

const validateForm = values => {
    const errors = {};
    if (!values.userId) errors.email = [ERROR_FIELD_IS_REQUIRED];
    if (!values.quizId) errors.subscriptions = [ERROR_FIELD_IS_REQUIRED];
    if (!values.answers) errors.subscriptions = [ERROR_FIELD_IS_REQUIRED];
    if (!values.score) errors.subscriptions = [ERROR_FIELD_IS_REQUIRED];
    if (!values.total) errors.subscriptions = [ERROR_FIELD_IS_REQUIRED];
    if (!values.right) errors.subscriptions = [ERROR_FIELD_IS_REQUIRED];

    //TODO: Check format of an userId field.
    //TODO: Check format of an quizId field.
    //TODO: Check format of an answers field.
    //TODO: Check format of an score field.
    //TODO: Check format of an total field.
    //TODO: Check format of an right field.

    return errors;
};

export const AssessmentCreate = props => (
    <List {...props} filters={<AssessmentFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <TextInput label="User Id" source="userId"/>
            <TextInput label="Quiz Id" source="quizId"/>
            <TextInput label="Answers" source="answers"/>
            <TextInput label="Score" source="score"/>
            <TextInput label="Total" source="total"/>
            <TextInput label="Right" source="right"/>
        </SimpleForm>
    </List>
);

export const AssessmentEdit = props => (
    <List {...props} filters={<AssessmentFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <TextInput label="User Id" source="userId"/>
            <TextInput label="Quiz Id" source="quizId"/>
            <TextInput label="Answers" source="answers"/>
            <TextInput label="Score" source="score"/>
            <TextInput label="Total" source="total"/>
            <TextInput label="Right" source="right"/>
        </SimpleForm>
    </List>
);