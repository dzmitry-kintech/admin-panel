import React from "react";
import {Create, Datagrid, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, AutocompleteInput, ReferenceInput, ReferenceField, SelectInput, SelectArrayInput, ReferenceArrayInput} from "react-admin";

const QuizFilter = props => (
    <Filter {...props}>
        <TextInput label="Id" source="id" alwaysOn/>
        <TextInput label="Topic Id" source="topicId" alwaysOn/>
    </Filter>
);

export const QuizList = ({...props }) => (
    <List {...props} filters={<QuizFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Topic Id: ${record.topicId}`} secondaryText={record => `Id: ${record.id} ● Questions Id: ${record.questionsId}`}/>}
            medium={
                <Datagrid>
                    <TextField source="id" label="Id"/>
                    <ReferenceField source="topicId" reference="topics" label="Topic Id">
                        <TextField source="title"/>
                    </ReferenceField>
                    <TextField source="questionsId" label="Questions Id"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

export const QuizCreate = ({...props }) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <ReferenceInput source="topicId" reference="topics" label="Topic Id">
                <SelectInput optionText="title"/>
            </ReferenceInput>
            <TextInput source="questionsId" label="Questions Id"/>
        </SimpleForm>
    </Create>
);

export const QuizEdit = ({...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <ReferenceInput source="topicId" reference="topics" label="Topic Id">
                <SelectInput optionText="title"/>
            </ReferenceInput>
            <TextInput source="questionsId" label="Questions Id"/>
        </SimpleForm>
    </Edit>
);

