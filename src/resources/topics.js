import React from "react";
import {Create, Datagrid, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, NumberInput} from "react-admin";

const TopicFilter = props => (
    <Filter {...props}>
        <TextInput label="Id" source="id" alwaysOn/>
        <TextInput label="Quiz Id" source="quizId" alwaysOn/>
        <TextInput label="Title" source="title" alwaysOn/>
    </Filter>
);

export const TopicList = ({...props }) => (
    <List {...props} filters={<TopicFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Title: ${record.title}`} secondaryText={record => `Id: ${record.id} ● Quiz Id: ${record.quizId}`}/>}
            medium={
                <Datagrid>
                    <TextField source="id" label="Id"/>
                    <TextField source="title" label="Title"/>
                    <TextField source="content" label="Content"/>
                    <TextField source="coordinates" label="Coordinates"/>
                    <TextField source="quizId" label="Quiz Id"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

export const TopicCreate = ({...props }) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id [assigned automatically]"/>
            <TextInput source="title" label="Title"/>
            <TextInput source="content" label="Content" multiline/>
            <TextInput source="coordinates" label="Coordinates" multiline/>
            <NumberInput source="quizId" label="Quiz Id"/>
        </SimpleForm>
    </Create>
);

export const TopicEdit = ({...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <TextInput source="title" label="Title"/>
            <TextInput source="content" label="Content" multiline/>
            <TextInput source="coordinates" label="Coordinates" multiline/>
            <NumberInput source="quizId" label="Quiz Id"/>
        </SimpleForm>
    </Edit>
);
