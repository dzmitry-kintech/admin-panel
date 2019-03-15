import React from "react";
import {Datagrid, EditButton, Edit, Create, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, NumberInput, DisabledInput} from "react-admin";

const AnswerFilter = props => (
    <Filter {...props}>
        <TextInput label="Filter by Id" source="id" alwaysOn/>
        <TextInput label="Filter by Question Id" source="questionId" alwaysOn/>
    </Filter>
);

export const AnswerList = props => (
    <List {...props} filters={<AnswerFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => record.email} secondaryText={record => `id: ${record.id} | deleted: ${record.deleted}`}/>}
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Answer" source="answer"/>
                    <TextField label="Scores" source="scores"/>
                    <TextField label="Question Id" source="questionId"/>
                    <TextField label="Question Name" source="questionName"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const ERROR_FIELD_IS_REQUIRED = 'The field is required';

const validateForm = values => {
    const errors = {};
    if (!values.questionId) errors.questionId = [ERROR_FIELD_IS_REQUIRED];
    if (!values.answer) errors.answer = [ERROR_FIELD_IS_REQUIRED];
    if (!values.scores) errors.scores = [ERROR_FIELD_IS_REQUIRED];

    //TODO: Check format of an questionId field (must be as integer number).
    //TODO: Check format of an answer field (must be as integer number).
    //TODO: Check format of a scores field (must be as integer number).

    return errors;
};

export const AnswerCreate = props => (
    <Create {...props} filters={<AnswerFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <TextInput label="Question Id" source="questionId"/>
            <TextInput label="Answer" source="answer"/>
            <TextInput label="Scores" source="scores"/>
        </SimpleForm>
    </Create>
);

export const AnswerEdit = props => (
    <Edit {...props} filters={<AnswerFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <TextInput label="Question Id" source="questionId"/>
            <TextInput label="Answer" source="answer"/>
            <TextInput label="Scores" source="scores"/>
        </SimpleForm>
    </Edit>
);