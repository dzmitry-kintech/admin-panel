import React from "react";
import {Datagrid, EditButton, Edit, Create, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, NumberInput, DisabledInput} from "react-admin";

const AnswerFilter = props => (
    <Filter {...props}>
        <TextInput label="Search user by id" source="id" alwaysOn/>
        <TextInput label="Search user by email" source="email" alwaysOn/>
    </Filter>
);

export const AnswerList = ({...props }) => (
    <List {...props} filters={<AnswerFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => record.email} secondaryText={record => `id: ${record.id} | deleted: ${record.deleted}`}/>}
            medium={
                <Datagrid>
                    <TextField source="id" label="Id"/>
                    <TextField source="userId" label="User Id"/>
                    <TextField source="quizId" label="Quiz Id"/>
                    <TextField source="questionId" label="Question Id"/>
                    <TextField source="answerIndex" label="Answer Index"/>
                    <TextField source="scores" label="Scores"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

export const AnswerCreate = ({...props }) => (
    <Create {...props} filters={<AnswerFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <NumberInput source="userId" label="User Id"/>
            <NumberInput source="quizId" label="Quiz Id"/>
            <TextField source="questionId" label="Question Id"/>
            <TextField source="answerIndex" label="Answer Index"/>
            <NumberInput source="scores" label="Scores"/>
        </SimpleForm>
    </Create>
);

export const AnswerEdit = ({...props }) => (
    <Edit {...props} filters={<AnswerFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <NumberInput source="userId" label="User Id"/>
            <NumberInput source="quizId" label="Quiz Id"/>
            <TextField source="questionId" label="Question Id"/>
            <TextField source="answerIndex" label="Answer Index"/>
            <NumberInput source="scores" label="Scores"/>
        </SimpleForm>
    </Edit>
);