import React from "react";
import {Create, Datagrid, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, RadioButtonGroupInput, NumberInput} from "react-admin";

const QuestionListFilter = props => (
    <Filter {...props}>
        <TextInput label="Id" source="id" alwaysOn/>
        <TextInput label="Type" source="type" alwaysOn/>
        <TextInput label="Question" source="question" alwaysOn/>
    </Filter>
);

export const QuestionList = ({...props }) => (
    <List {...props} filters={<QuestionListFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Question: ${record.question}`} secondaryText={record => `Id: ${record.id} ● Type: ${record.type}`}/>}
            medium={
                <Datagrid>
                    <TextField source="id" label="Id"/>
                    <TextField source="type" label="Type"/>
                    <TextField source="question" label="Question"/>
                    <TextField source="choice" label="Choice"/>
                    <TextField source="answerIndex" label="Answer Index"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

export const QuestionCreate = ({...props }) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <div style={{display: "inline-flex"}}>
                <RadioButtonGroupInput source="type" choices={[{ id: 'single choice', name: 'Single choice' }, { id: 'yes or no', name: 'Yes or No' }]} />
            </div>
            <TextInput source="question" label="Question"/>
            <TextInput source="choice" label="Choice"/>
            <NumberInput source="answerIndex" label="Answer Index"/>
        </SimpleForm>
    </Create>
);

export const QuestionEdit = ({...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <div style={{display: "inline-flex"}}>
                <RadioButtonGroupInput source="type" choices={[{ id: 'single choice', name: 'Single choice' }, { id: 'yes or no', name: 'Yes or No' },]} />
            </div>
            <TextInput source="question" label="Question"/>
            <TextInput source="choice" label="Choice"/>
            <NumberInput source="answerIndex" label="Answer Index"/>
        </SimpleForm>
    </Edit>
);
