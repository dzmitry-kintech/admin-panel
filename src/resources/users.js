import React from "react";
import {withStyles} from "material-ui";
import {BooleanInput, Create, Datagrid, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, email, FunctionField} from "react-admin";

const styles = {BooleanInput: { display: "inline-flex"}};

const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="Id" source="id" alwaysOn/>
        <TextInput label="Email" source="email" alwaysOn/>
        <BooleanInput label="Is Deleted" source="isDeleted" defaultValue={true}/>
    </Filter>
);

export const UserList = ({...props }) => (
    <List {...props} filterDefaultValues={{isDeleted: false}} filters={<UserFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => `Email: ${record.email}`} secondaryText={record => `Id: ${record.id} ● Is Deleted: ${record.isDeleted}`}/>}
            medium={
                <Datagrid>
                    <TextField source="id" label="Id"/>
                    <TextField source="email" label="Email"/>
                    <FunctionField label="Is Deleted" render={record => record.isDeleted ? 'yes' : 'no'}/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

export const UserCreate =  withStyles(styles)(({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id [assigned automatically]"/>
            <TextInput source="email" label="Email" validate={email('Incorrect format')}/>
            <BooleanInput source="isDeleted" label="Is Deleted" defaultValue={false} formClassName={classes.BooleanInput}/>
        </SimpleForm>
    </Create>
));

export const UserEdit = withStyles(styles)(({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <TextInput source="email" label="Email" validate={email('Incorrect format')} />
            <BooleanInput source="isDeleted" label="Is Deleted" defaultValue={false} formClassName={classes.BooleanInput}/>
        </SimpleForm>
    </Edit>
));