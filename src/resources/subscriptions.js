import React from "react";
import {withStyles} from "material-ui";
import {withState} from "recompose";
import {AutocompleteInput, BooleanField, BooleanInput, Create, Datagrid, DateField, DateInput, DisabledInput, Edit, EditButton, Filter, List, Responsive, SimpleForm, SimpleList, TextField, TextInput, ReferenceInput} from "react-admin";

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

//const isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
//const totalDays  = year => isLeapYear(year) ? 366 : 365;


const styles = {BooleanInput: {display: "inline-flex"}};

const SubscriptionFilter = props => (
    <Filter {...props}>
        <TextInput label="Filter by Id field" source="id" alwaysOn/>
        <TextInput label="Filter by Owner Email" source="ownerEmail" alwaysOn/>
        <BooleanInput label="Filter by Is Approved field" source="isApproved" defaultValue={true}/>
    </Filter>
);

export const SubscriptionList = ({classes, ...props}) => (
    <List {...props} filterDefaultValues={{isApproved: true}} filters={<SubscriptionFilter/>} sort={{field: "id", order: "ASC"}}>
        <Responsive
            small={
                <SimpleList primaryText={record => `Start Date: ${record.startDate} | End Date: ${record.endDate}`} secondaryText={record => `Id: ${record.id} | Owner Email: ${record.ownerEmail} | Is Approved: ${record.isApproved}`}/>
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id"/>
                    <TextField source="ownerEmail" label="Owner Email"/>
                    <DateField source="startDate" label="Start Date"/>
                    <DateField source="endDate" label="End Date"/>
                    <BooleanField source="isApproved" label="Is Approved"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const HOC = withState('date', 'setDate', {start: new Date(), end: new Date().addDays(365)});
const DateInputRange = HOC(({date, setDate}) => {
    const onChange = value => setDate({start: new Date(value), end: new Date(value).addDays(365)});
    return (
        <React.Fragment>
            <DateInput style={{width: "256px"}} source="startDate" label="Start Date" defaultValue={date.start} onChange={event => onChange(Object.values(event).splice(0, 10).join(''))}/>
            <br/>
            <DateInput style={{width: "256px"}} source="endDate" label="End Date" defaultValue={date.end} disabled/>
        </React.Fragment>
    );
});

export const SubscriptionCreate = withStyles(styles)(({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id [assigned automatically]"/>
            <ReferenceInput source="email" label="Owner Email" reference="users">
                <AutocompleteInput optionText="email"/>
            </ReferenceInput>
            <DateInputRange/>
            <BooleanInput source="isApproved" label="Is Approved" formClassName={classes.BooleanInput}/>
        </SimpleForm>
    </Create>
));

export const SubscriptionEdit = withStyles(styles)(({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Id"/>
            <TextInput source="ownerEmail" label="Owner Email"/>
            <DateInputRange/>
            <BooleanInput source="isApproved" label="Is Approved" formClassName={classes.BooleanInput}/>
        </SimpleForm>
    </Edit>
));