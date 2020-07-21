import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Container } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import moment from 'moment';

export default function CarlogDialog(props) {
    const dateFormat = 'YYYY-MM-DDThh:mm';
    const [carLicence, setCarLicence] = React.useState('');
    const [driver, setDriver] = React.useState('');
    const [selectedStartDate, setSelectedStartDate] = React.useState(new moment(new Date()).format(dateFormat));
    const [selectedEndDate, setSelectedEndDate] = React.useState(new moment(new Date()).format(dateFormat));

    const handleCarLicenceChange = (event) => {
        setCarLicence(event.target.value);
    };

    const handleDriverChange = (event) => {
        setDriver(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setSelectedStartDate(new moment(event.target.value).format(dateFormat))
    };

    const handleEndDateChange = (event) => {
        setSelectedEndDate(new moment(event.target.value).format(dateFormat))
    };

    /** Form validation */
    const [startDistanceText, setStartDistanceText] = React.useState('');
    


    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New car log</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter all values
                    </DialogContentText>
                    <Container>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="carLicenceId-label">Car licence id</InputLabel>
                                    <Select
                                        labelId="carLicenceId-label"
                                        id="carLicenceId"
                                        value={carLicence}
                                        fullWidth
                                        onChange={handleCarLicenceChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>BL-009YZ</MenuItem>
                                        <MenuItem value={2}>ZA-484DD</MenuItem>
                                    </Select>
                                    <FormHelperText>Select car</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="driverID-label">Driver name</InputLabel>
                                    <Select
                                        labelId="driverID-label"
                                        id="driverID"
                                        value={driver}
                                        fullWidth
                                        onChange={handleDriverChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Developer</MenuItem>
                                        <MenuItem value={2}>Lubomir Losonsky</MenuItem>
                                    </Select>
                                    <FormHelperText>Select driver</FormHelperText>
                                </FormControl>

                            </Grid>

                            <Grid item xs={6}><TextField autoFocus margin="dense" id="startDestination" label="Start destination" fullWidth /></Grid>
                            <Grid item xs={6}><TextField autoFocus margin="dense" id="endDestination" label="End destination2" fullWidth /></Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField autoFocus margin="dense" id="startDateTime" label="Start date" type="datetime-local" InputLabelProps={{ shrink: true }} fullWidth value={selectedStartDate} onChange={handleStartDateChange} />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField autoFocus margin="dense" id="endTime" label="End date" type="datetime-local" InputLabelProps={{ shrink: true }} fullWidth value={selectedEndDate} onChange={handleEndDateChange} />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}><TextField autoFocus margin="dense" id="description" label="Description" fullWidth /></Grid>
                            <Grid item xs={6}><TextField autoFocus margin="dense" id="counterEndState" label="Counter end state" fullWidth /></Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField autoFocus margin="dense" id="businessDistance" label="Business distance" fullWidth type="number" />
                                    <FormHelperText>Distance value in km</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField autoFocus margin="dense" id="personalDistance" label="Personal distance" fullWidth type="number"/>
                                    <FormHelperText>Distance value in km</FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}><TextField autoFocus margin="dense" id="boughtFuelValue" label="Bought fuel value" fullWidth /></Grid>
                            <Grid item xs={6}><TextField autoFocus margin="dense" id="boughtFuelAmount" label="Bought fuel amount" fullWidth /></Grid>

                            <Grid item xs={6}><TextField autoFocus margin="dense" id="maximalSpeed" label="Maximal speed" fullWidth /></Grid>
                            <Grid item xs={6}><TextField autoFocus margin="dense" id="averageSpeed" label="Average speed" fullWidth /></Grid>
                        </Grid>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.handleSubmit} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
