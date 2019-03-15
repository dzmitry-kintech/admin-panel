import React from "react";
import {withStyles} from "material-ui";
import {BooleanInput, Create, Datagrid, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, email, FunctionField, ReferenceField, SelectInput, ReferenceInput} from "react-admin";

const styles = {BooleanInput: { display: "inline-flex"}};

const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="Filter by Id" source="id" alwaysOn/>
        <TextInput label="Filter by Email" source="email" alwaysOn/>
        <BooleanInput label="Filter by Is Deleted" source="isDeleted" defaultValue={true}/>
    </Filter>
);

export const UserList = props => (
    <List {...props} filterDefaultValues={{isDeleted: false}} filters={<UserFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Email: ${record.email}`} secondaryText={record => `Id: ${record.id} ● Is Deleted: ${record.isDeleted} ● Subscriptions: ${record.subscriptions}`}/>}
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Email" source="email"/>
                    <FunctionField label="Is Deleted" render={record => record.isDeleted ? 'yes' : 'no'}/>
                    <TextField source="subscriptions"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const ERROR_FIELD_IS_REQUIRED = 'The field is required';
const ERROR_FIELD_HAS_INCORRECT_FORMAT = 'The field has an incorrect format';

const validateForm = values => {
    const errors = {};
    if (!values.email) errors.email = [ERROR_FIELD_IS_REQUIRED];
    if (!values.subscriptions) errors.subscriptions = [ERROR_FIELD_IS_REQUIRED];

    //TODO: Check format of an email field.
    //TODO: Check format of a subscriptions field (must be as '1,2,3').

    return errors;
};

export const UserCreate =  withStyles(styles)(({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id [assigned automatically]" source="id"/>
            <TextInput label="Email" source="email" validate={email(ERROR_FIELD_HAS_INCORRECT_FORMAT)}/>
            <BooleanInput label="Is Deleted" source="isDeleted" defaultValue={false} formClassName={classes.BooleanInput}/>
            <TextInput label="Subscriptions" source="subscriptions"/>
        </SimpleForm>
    </Create>
));

export const UserEdit = withStyles(styles)(({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <TextInput label="Email" source="email" validate={email(ERROR_FIELD_HAS_INCORRECT_FORMAT)}/>
            <BooleanInput label="Is Deleted" source="isDeleted" defaultValue={false} formClassName={classes.BooleanInput}/>
            <TextInput label="Subscriptions" source="subscriptions"/>
        </SimpleForm>
    </Edit>
));