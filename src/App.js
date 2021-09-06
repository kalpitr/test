import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ViewState, EditingState, MonthView } from "@devexpress/dx-react-scheduler";
import ContactPhone from "@material-ui/icons/ContactPhone";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import './css/bootstrap.min.css'
import './css/media_query.css'
import './css/dashboard_inner.css'
import './css/dashboard_custom_styles.css'
// import './css/font-awesome.css'
// import './css/bootstrap-glyphicons.css'

import {
  DateNavigator,
  Toolbar,
  TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";

import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  ConfirmationDialog,
  ViewSwitcher,
  DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui";
import { appointments } from "./demo-data/appointments";

const useStyles = makeStyles(theme => ({
  todayCell: {
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.14),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
  },
  weekendCell: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
  },
  today: {
    backgroundColor: fade(theme.palette.primary.main, 0.16),
  },
  weekend: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
  },
}));
const style = () => ({
  icon: {
    color: "#878f99",
  },
  textCenter: {
    textAlign: "center",
  },
  todayCell: {
    backgroundColor: "red",
  },
  weekendCell: {
    backgroundColor: "grey",
  },
});

const messages = {
  moreInformationLabel: "",
  titleLabel: "Enter Name",
  detailsLabel: "Patient Name ",
  repeatLabel: "",
};

const TimeTableCell = (props) => {
  const classes = useStyles();
  const { startDate } = props;
  const date = new Date(startDate);
  
  // if (date.getDate() === new Date().getDate()) {
  //   return <WeekView.TimeTableCell className={classes.todayCell}  {...props} />;
  // }
  if (date.getDay() === 0 || date.getDay() === 6) {
    return (
      <WeekView.TimeTableCell {...props} className={classes.weekendCell} onDoubleClick={undefined} />
    );
  }
  return <WeekView.TimeTableCell {...props} />;
};

const DayScaleCell = (props) => {
  const classes = style();
  const { startDate, today } = props;

  // if (today) {
  //   return <WeekView.DayScaleCell {...props} className={classes.today} />;
  // }
  if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...props} className={classes.weekend} onDoubleClick={undefined} />;
  }
  return <WeekView.DayScaleCell {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ patientContactNumber: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Patient contact number" type="title" />
      <AppointmentForm.TextEditor

        value={appointmentData.patientContactNumber}
        onValueChange={onCustomFieldChange}
        placeholder="Enter contact number"
      />
    </AppointmentForm.BasicLayout>
  );
};

const TextEditor = (props) => {
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};

const Content = withStyles(style, { name: "Content" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Grid container alignItems="center">
        <Grid item xs={2} className={classes.textCenter}>
          <ContactPhone className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>{appointmentData.patientContactNumber}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  )
);

//  appointments = appointment => ({
//   id: appointment.id,
//   startDate: appointment.startDate,
//   // endDate: usaTime(appointment.end.dateTime),
//   // title: appointment.summary,
// });
export default function Demo() {
  const [data, setData] = React.useState(appointments);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [changeAppointment, setChangeAppointment] = React.useState("");
  const [AppointmentChanges, setAppointmentChanges] = React.useState("");
  const [editingAppointment, setEditingAppointment] = React.useState(undefined);
  const [visibleForm, setVisibleForm] = React.useState(true);
  const [disableAppointmentOnHoliday,setDisableAppointmentOnHoliday] = React.useState(false)

  // const disableAppointmentOnHoliday = (restProps) => {
  //   console.log(restProps);
  //   setVisibleForm(false);
  // };
  const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
      // onDoubleClick={() => disableAppointmentOnHoliday({ ...restProps })}
      {...restProps}
      style={{
        ...style,
        backgroundColor: "#64B5FC",
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  const currentDateChange = (currentDate) => {
    setCurrentDate(currentDate);
  };
  const changeAddedAppointment = (addedAppointment) => {
    setChangeAppointment(addedAppointment);
  };
  const changeAppointmentChanges = (appointmentChanges) => {
    setAppointmentChanges(appointmentChanges);
  };

  const changeEditingAppointment = (editingAppointment) => {
    setEditingAppointment(editingAppointment);
  };

  const preCommitChanges = ({ added, changed, deleted }) => {
    alert("test");
  };

  const commitChanges = ({ added, changed, deleted }) => {
    //To add new data
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      setData([...data, { id: startingAddedId, ...added }]);
    }
    //Update the current data
    if (changed) {
      setData(
        data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        )
      );
    }
    if (deleted !== undefined) {
      setData(data.filter((appointment) => appointment.id !== deleted));
    }
    return data;
  };

  return (
    
    // <Container
    //   // fixed
    //   // className="scrollable"
    //   // style={{
    //   //   position: "absolute",
    //   //   top: "50%",
    //   //   left: "50%",
    //   //   transform: "translate(-50%,-50%)",
    //   // }}
    // >

    <div>
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container-fluid">
			<div class="logo_div">
				<img src="./images/Login-Icons/DocVedaLogo-01.svg" />
			</div>
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#menu-toggle" id="menu-toggle"> <span class="glyphicon glyphicon-align-justify" aria-hidden="true">
                    </span>
				</a>
				<div class="dashboard_title H-L" style={{padding:"0px;"}}>
					<h4 style={{marginTop:"0px", marginBottom:"0px"}}>
                        <img src="./images/Clinic/Clinic.svg" class="MainHeadBoxCenter hlogo" style={{marginTop: "2px; height: 55px"}} />
                    </h4>
				</div>
				<div class="dashboard_title"> <strong>Appointment</strong>
				</div>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
					<li class="bell_icon">
						<a href="index.html">
							<img src="images/dashboard_inner_icons/Notifications-01.svg" /> <span class="red_dot"></span>
						</a> <small class="badge_style"></small>
					</li>
					<li class="dropdown" id="menuLogin">
						<a class="dropdown-toggle navUserDtl" href="#" data-toggle="dropdown" id="navLogin" >
							<img src="images/dashboard_inner_icons/User_icon-01.svg" class="ProfImg" /> <span class="UserName">Rupesh D</span>
							<img src="images/dashboard_inner_icons/DownArrowWhite-01.svg" class="ProfRightArrow" /> <small class="sub_heading">Receptionist</small>
						</a>
						<div class="dropdown-menu dropdownInrDiv" > <a data-toggle="modal" role="button" href="#">Profile</a>
							<a data-toggle="modal" role="button" href="#">Logout</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    <Paper elevation={3}>
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
          preCommitChanges={preCommitChanges}
        />
        <WeekView
          startDayHour={9}
          endDayHour={19}
          showAllDayTitle={false}
          // excludedDays={[0]}
          timeTableCellComponent={TimeTableCell}
          dayScaleCellComponent={DayScaleCell}
        />

        <MonthView/>
        <Appointments appointmentComponent={Appointment} />

        <Toolbar />
        <DateNavigator />

        <ViewSwitcher />
        <EditRecurrenceMenu />

        <DragDropProvider / >

        <AppointmentTooltip
          showOpenButton
          showDeleteButton
          showCloseButton
          contentComponent={Content}
        />
        <TodayButton/>
        <AppointmentForm
      
          basicLayoutComponent={BasicLayout}
          textEditorComponent={TextEditor} //Add new textbox
          messages={messages}
        />
      </Scheduler>
    </Paper>
    </div>
    // </Container>
  );
}
