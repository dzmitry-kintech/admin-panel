import React from "react";
import {withStyles} from "material-ui";
import {withState} from "recompose";
import * as moment from 'moment';
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
    ReferenceInput,
    email
} from "react-admin";

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
        <TextInput label="Filter by Id" source="id" alwaysOn/>
        <TextInput label="Filter by Owner Email" source="ownerEmail" alwaysOn/>
        <BooleanInput label="Filter by Is Approved " source="isApproved" defaultValue={true}/>
    </Filter>
);

export const SubscriptionList = props => (
    <List {...props} filterDefaultValues={{isApproved: true}} filters={<SubscriptionFilter/>} sort={{field: "id", order: "ASC"}}>
        <Responsive
            small={
                <SimpleList primaryText={record => `Start Date: ${record.startDate} ● End Date: ${record.endDate}`} secondaryText={record => `Id: ${record.id} ● Owner Email: ${record.ownerEmail} ● Is Approved: ${record.isApproved}`}/>
            }
            medium={
                <Datagrid>
                    <TextField label="Id" source="id"/>
                    <TextField label="Owner Email" source="ownerEmail"/>
                    <DateField label="Start Date" source="startDate"/>
                    <DateField label="End Date" source="endDate"/>
                    <BooleanField label="Is Approved" source="isApproved"/>
                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

// const HOC = withState('date', 'setDate', {start: new Date(), end: new Date().addDays(365)});
// const DateInputRange = HOC(({date, setDate}) => {
//     const onChange = value => setDate({start: new Date(value), end: new Date(value).addDays(365)});
//     return (
//         <React.Fragment>
//             <DateInput style={{width: "256px"}} source="startDate" label="Start Date" defaultValue={date.start} onChange={event => console.log(Object.values(event).splice(0, 10).join('')) || onChange(Object.values(event).splice(0, 10).join(''))}/>
//             <br/>
//             <DateInput style={{width: "256px"}} source="endDate" label="End Date" defaultValue={date.end}/>
//         </React.Fragment>
//     );
// });

const ERROR_FIELD_IS_REQUIRED = 'The field is required';
const ERROR_DATE_RANGE = 'The date range is wrong';

const validateForm = values => {
    const errors = {};

    if (!values.startDate) errors.startDate = [ERROR_FIELD_IS_REQUIRED];
    if (!values.endDate) errors.endDate = [ERROR_FIELD_IS_REQUIRED];
    if (values.startDate && values.endDate) {
        const startDateReal = moment(values.startDate);
        const startDateFake = moment(values.endDate).subtract(365, 'days');
        if (startDateFake .get('month') !== startDateReal.get('month') || startDateFake.get('date') !== startDateReal.get('date') || startDateFake.get('year') !== startDateReal.get('year')) {
            errors.startDate = [ERROR_DATE_RANGE];
            errors.endDate = [ERROR_DATE_RANGE];
        }
    }

    return errors;
};

export const SubscriptionCreate = withStyles(styles)(({ classes, ...props }) => {
    const now = moment();
    const start = now.clone();
    const end = now.clone().add(365, 'days');
    return (
        <Create {...props}>
            <SimpleForm validate={validateForm}>
                <DisabledInput label="Id [assigned automatically]" source="id"/>
                <DateInput label="Start Date" source="startDate" style={{width: "256px"}} defaultValue={start.toDate()}/>
                <DateInput label="End Date" source="endDate" style={{width: "256px"}} defaultValue={end.toDate()}/>
                <BooleanInput label="Is Approved" source="isApproved" formClassName={classes.BooleanInput}/>
            </SimpleForm>
        </Create>
    );
});

export const SubscriptionEdit = withStyles(styles)(({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm validate={validateForm}>
            <DisabledInput label="Id" source="id"/>
            <DateInput label="Start Date" source="startDate" style={{width: "256px"}}/>
            <DateInput label="End Date" source="endDate" style={{width: "256px"}}/>
            <BooleanInput label="Is Approved" source="isApproved" formClassName={classes.BooleanInput}/>
        </SimpleForm>
    </Edit>
));