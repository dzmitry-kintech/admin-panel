import React from "react";
import {withStyles} from "material-ui";
import {
    AutocompleteInput,
    BooleanField,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
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
    ReferenceInput
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

const SubscriptionFilter = props => (
    <Filter {...props}>
        <TextInput label="Search by owner email" source="ownerEmail" alwaysOn/>
    </Filter>
);

export const SubscriptionList = withStyles(styles)(({ classes, ...props }) => (
    <List {...props} filters={<SubscriptionFilter />} sort={{ field: "id", order: "ASC" }}>
        <Responsive
            small={
                <SimpleList primaryText={record => record.id} secondaryText={record => `owner id: ${record.ownerId} | approved: ${record.approved} | start date: ${record.startDate} | end date: ${record.startDate}`}/>
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="ID" cellClassName={classes.id}/>
                    <TextField source="ownerEmail" label="Owner Email" cellClassName={classes.ownerEmail}/>
                    <DateField source="startDate" label="Start Date" cellClassName={classes.startDate}/>
                    <DateField source="endDate" label="End Date" cellClassName={classes.endDate}/>
                    <BooleanField source="approved" label="Approved" cellClassName={classes.approved}/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
));

export const SubscriptionCreate = withStyles(styles)(({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID (assigned automatically)"/>
            <ReferenceInput source="email" label="Owner Email" reference="users">
                <AutocompleteInput optionText="email"/>
            </ReferenceInput>
            <DateInput source="startDate" label="Start Date" defaultValue={new Date()} />
            <DateInput source="endDate" label="End Date" defaultValue={new Date()} />
            <BooleanInput source="approved" label="Approved"/>
        </SimpleForm>
    </Create>
));

export const SubscriptionEdit = withStyles(styles)(({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID"/>
            <TextInput source="ownerEmail" label="Owner Email"/>
            <DateInput source="startDate" label="Start Date"/>
            <DateInput source="endDate" label="End Date"/>
            <BooleanInput source="approved" label="Approved"/>
        </SimpleForm>
    </Edit>
));