import React from "react";
import {withStyles} from "material-ui";
import {
    BooleanField,
    BooleanInput,
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
    email
} from "react-admin"; // eslint-disable-line import/no-unresolved

const styles = {
    title: {
        maxWidth: "20em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    publishedAt: { fontStyle: "italic" }
};

const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="Search user by id" source="id" alwaysOn/>
        <TextInput label="Search user by email" source="email" alwaysOn/>
    </Filter>
);

export const UserList = withStyles(styles)(({ classes, ...props }) => (
    <List {...props} filters={<UserFilter/>} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={<SimpleList primaryText={record => record.email} secondaryText={record => `id: ${record.id} | deleted: ${record.deleted}`}/>}
            medium={
                <Datagrid>
                    <TextField source="id" label="ID" cellClassName={classes.id}/>
                    <TextField source="email" label="Email" cellClassName={classes.email}/>
                    <BooleanField source="deleted" label="Deleted" cellClassName={classes.deleted}/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
));

export const UserCreate = withStyles(styles)(({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID (assigned automatically)"/>
            <TextInput source="email" label="Email" validate={email('Incorrect email format')}/>
            <BooleanInput source="deleted" label="Deleted" defaultValue={false}/>
        </SimpleForm>
    </Create>
));

export const UserEdit = withStyles(styles)(({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID"/>
            <TextInput source="email" label="Email" validate={email('Incorrect email format')} />
            <BooleanInput source="deleted" label="Deleted"/>
        </SimpleForm>
    </Edit>
));