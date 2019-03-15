import React from "react";
import {
    Create,
    Datagrid,
    DisabledInput,
    Edit,
    EditButton,
    Filter,
    List,
    Responsive,
    SimpleForm,
    SimpleList,
    TextField,
    TextInput,
} from "react-admin";

const QuizFilter = props => (
    <Filter {...props}>
        <TextInput label="Filter by Id" source="id" alwaysOn/>
        <TextInput label="Filter by Topic Name" source="topicName" alwaysOn/>
    </Filter>
);

export const QuizList = props => (
    <List {...props} filters={<QuizFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Questions: ${record.questions}`} secondaryText={record => `Id: ${record.id} ● Topic Name: ${record.topicName}`}/>}
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Topic Name" source="topicName"/>
                    <TextField label="Questions" source="questions"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const ERROR_FIELD_IS_REQUIRED = 'The field has an incorrect format';

const validateForm = values => {
    const errors = {};
    if (!values.questions) errors.subscriptions = [ERROR_FIELD_IS_REQUIRED];

    //TODO: Check format of a questions field (must be as '1,2,3').

    return errors;
};

export const QuizCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <TextInput label="Questions" source="questions"/>
        </SimpleForm>
    </Create>
);

export const QuizEdit = props => (
    <Edit {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <TextInput label="Questions" source="questions"/>
        </SimpleForm>
    </Edit>
);