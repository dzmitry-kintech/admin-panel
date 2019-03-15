import React from "react";
import {Create, Datagrid, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, NumberInput} from "react-admin";

const TopicFilter = props => (
    <Filter {...props}>
        <TextInput label="Filter by Id" source="id" alwaysOn/>
        <TextInput label="Filter by Quiz Id" source="quizId" alwaysOn/>
        <TextInput label="Filter by Title" source="title" alwaysOn/>
    </Filter>
);

export const TopicList = props => (
    <List {...props} filters={<TopicFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Title: ${record.title}`} secondaryText={record => `Id: ${record.id} ● Quizzes: ${record.quizzes}`}/>}
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Title" source="title"/>
                    <TextField label="Content" source="content"/>
                    <TextField label="Coordinates" source="coordinates"/>
                    <TextField label="Quizzes" source="quizzes"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const ERROR_FIELD_IS_REQUIRED = 'The field is required';

const validateForm = values => {
    const errors = {};
    if (!values.title) errors.title = [ERROR_FIELD_IS_REQUIRED];
    if (!values.content) errors.content = [ERROR_FIELD_IS_REQUIRED];
    if (!values.coordinates) errors.coordinates = [ERROR_FIELD_IS_REQUIRED];
    if (!values.quizzes) errors.quizzes = [ERROR_FIELD_IS_REQUIRED];

    //TODO: Check format of a content field.
    //TODO: Check format of a coordinates field.
    //TODO: Check format of an quizzes field (must be as '1,2,3').

    return errors;
};

export const TopicCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id [assigned automatically]" source="id"/>
            <TextInput label="Title" source="title"/>
            <TextInput label="Content" source="content" multiline/>
            <TextInput label="Coordinates" source="coordinates" multiline/>
            <TextInput label="Quizzes" source="quizzes"/>
        </SimpleForm>
    </Create>
);

export const TopicEdit = props => (
    <Edit {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id [assigned automatically]" source="id"/>
            <TextInput label="Title" source="title"/>
            <TextInput label="Content" source="content" multiline/>
            <TextInput label="Coordinates" source="coordinates" multiline/>
            <TextInput label="Quizzes" source="quizzes"/>
        </SimpleForm>
    </Edit>
);