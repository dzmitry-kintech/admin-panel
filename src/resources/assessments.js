import React from "react";
import {Datagrid, DisabledInput, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, NumberInput} from "react-admin";

const AssessmentFilter = props => (
    <Filter {...props}>
        <TextInput label="Search user by id" source="id" alwaysOn/>
        <TextInput label="Search user by email" source="email" alwaysOn/>
    </Filter>
);

export const AssessmentList = ({...props }) => (
    <List {...props} filters={<AssessmentFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => record.email} secondaryText={record => `id: ${record.id} | deleted: ${record.deleted}`}/>}
            medium={
                <Datagrid>
                    <TextField source="id" label="Id"/>
                    <TextField source="userID" label="User ID"/>
                    <TextField source="quizId" label="Quiz ID"/>
                    <TextField source="answers" label="Answers"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

export const AssessmentCreate = ({...props }) => (
    <List {...props} filters={<AssessmentFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <NumberInput source="userID" label="User ID"/>
            <NumberInput source="quizId" label="Quiz ID"/>
            <TextInput source="answers" label="Answers"/>
        </SimpleForm>
    </List>
);

export const AssessmentEdit = ({...props }) => (
    <List {...props} filters={<AssessmentFilter/>} sort={{ field: "id", order: "ASC" }}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <NumberInput source="userID" label="User ID"/>
            <NumberInput source="quizId" label="Quiz ID"/>
            <TextInput source="answers" label="Answers"/>
        </SimpleForm>
    </List>
);
