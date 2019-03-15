import React from "react";
import {Create, Datagrid, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, RadioButtonGroupInput, NumberInput} from "react-admin";

const QuestionListFilter = props => (
    <Filter {...props}>
        <TextInput label="Filter by Id" source="id" alwaysOn/>
        <TextInput label="Filter by Type" source="type" alwaysOn/>
        <TextInput label="Filter by Question" source="question" alwaysOn/>
    </Filter>
);

export const QuestionList = props => (
    <List {...props} filters={<QuestionListFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Question: ${record.question}`} secondaryText={record => `Id: ${record.id} ● Type: ${record.type}`}/>}
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Type" source="type"/>
                    <TextField label="Question" source="question"/>
                    <TextField label="Choice" source="choice"/>
                    <TextField label="Answer" source="answer"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const ERROR_FIELD_IS_REQUIRED = 'The field is required';

const validateForm = values => {
    const errors = {};
    if (!values.question) errors.question = [ERROR_FIELD_IS_REQUIRED];
    if (!values.choice) errors.choice = [ERROR_FIELD_IS_REQUIRED];
    if (!values.answer) errors.answer = [ERROR_FIELD_IS_REQUIRED];

    //TODO: Check format of an choice field.
    //TODO: Check format of a answer field (must be as '1,2,3').

    return errors;
};

export const QuestionCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <div style={{display: "inline-flex"}}>
                <RadioButtonGroupInput lable="Type" source="type" choices={[{ id: 'single choice', name: 'Single choice' }, { id: 'yes or no', name: 'Yes or No' }]} />
            </div>
            <TextInput label="Question" source="question"/>
            <TextInput label="Choice" source="choice" multiline/>
            <TextInput label="Answer" source="answer"/>
        </SimpleForm>
    </Create>
);

export const QuestionEdit = props => (
    <Edit {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <div style={{display: "inline-flex"}}>
                <RadioButtonGroupInput lable="Type" source="type" choices={[{ id: 'single choice', name: 'Single choice' }, { id: 'yes or no', name: 'Yes or No' }]} />
            </div>
            <TextInput label="Question" source="question"/>
            <TextInput label="Choice" source="choice" multiline/>
            <TextInput label="Answer" source="answer"/>
        </SimpleForm>
    </Edit>
);
