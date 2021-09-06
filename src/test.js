import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import ContactPhone from '@material-ui/icons/ContactPhone';
import { withStyles } from '@material-ui/core/styles';
import { DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';
import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';


import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  
  EditRecurrenceMenu,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './demo-data/appointments';


const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  }})
const messages = {
  moreInformationLabel: '',
  titleLabel:"Enter Name",
  detailsLabel:"Patient Name ",
  repeatLabel:""

};
const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  console.log(restProps)


  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ patientContactNumber: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label
        text="Patient contact number"
        type="title"
      />
      <AppointmentForm.TextEditor
        value={appointmentData.patientContactNumber}
        onValueChange={onCustomFieldChange}
        placeholder="Enter contact number"
      />
    </AppointmentForm.BasicLayout>
  );
};


const TextEditor = (props) => {
  if (props.type === 'multilineTextEditor') {
    return null;
  } return <AppointmentForm.TextEditor {...props} />;
};

const Content =withStyles(style, { name: 'Content' })(({
  children, appointmentData, classes, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
      <Grid item xs={2} className={classes.textCenter}>
       <ContactPhone className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.patientContactNumber}</span>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
));

//  appointments = appointment => ({
//   id: appointment.id,
//   startDate: appointment.startDate,
//   // endDate: usaTime(appointment.end.dateTime),
//   // title: appointment.summary,
// });
export default function Demo() {
 
  const [data,setData] = React.useState(appointments)
  const [currentDate,setCurrentDate]=React.useState(new Date)
  const [changeAppointment,setChangeAppointment] = React.useState("")
  const [AppointmentChanges,setAppointmentChanges] = React.useState("")
  const [editingAppointment,setEditingAppointment] = React.useState(undefined)


 
  const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: "#008839"
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  const currentDateChange =(currentDate) =>{
     setCurrentDate(currentDate ); 
  }
  const changeAddedAppointment = (addedAppointment) => {
    setChangeAppointment(addedAppointment );
  }
  const changeAppointmentChanges = (appointmentChanges) => {
    setAppointmentChanges(appointmentChanges);
  }

  const changeEditingAppointment = (editingAppointment) => {
    setEditingAppointment( editingAppointment );
  }

  const  commitChanges = ({ added, changed, deleted }) => {
   
    //To add new data
      if (added) {
        console.log(added)
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData([...data, { id: startingAddedId, ...added }])
      }
      //Update the current data 
      if (changed) {
        setData(data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)))
      }
      if (deleted !== undefined) {
        setData(data.filter(appointment => appointment.id !== deleted))
      }
      return data ;
  
  }

 
    return (
      <Container fixed className="scrollable"  style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
      <Paper elevation={3} >
     

        <Scheduler
          data={data}
          height={560}
          setCurrentDate={currentDate}
          firstDayOfWeek={currentDate.getDay()}
          
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
          />
          <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={changeAppointment}
            onAddedAppointmentChange={changeAddedAppointment}
            appointmentChanges={AppointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={changeEditingAppointment}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            showAllDayTitle={false}
            excludedDays={[0]}
          startingAddedId={1}
          setCurrentDate={currentDate}
          
          
          />
          <Toolbar />
          <DateNavigator />
          <EditRecurrenceMenu />
          <Appointments appointmentComponent={Appointment} />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
            showCloseButton
            contentComponent={Content}
          />
          <AppointmentForm  basicLayoutComponent={BasicLayout} 
            textEditorComponent={TextEditor}  messages={messages}/>
        </Scheduler>
     
        </Paper>
      </Container>

    
    );
  }




























