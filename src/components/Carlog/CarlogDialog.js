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
import InputAdornment from '@material-ui/core/InputAdornment';

export default function CarlogDialog(props) {
    const dateFormat = 'YYYY-MM-DDThh:mm';
    const [values, setValues] = React.useState({
        driver: '',
        carLicence: '',
        selectedStartDate: new moment(new Date()).format(dateFormat),
        selectedEndDate: new moment(new Date()).format(dateFormat),
        businessDistance: 0,
        maximalSpeed: 0,
        averageSpeed: 0,
        boughtFuelValue: 0,
        boughtFuelAmount: 0,
        counterEndState: 0,
        description: ''
    });

    const defaultFieldMessage = {
        driver: 'Select driver',
        carLicence: 'Select car licence',
        selectedStartDate: 'Enter route start date',
        selectedEndDate: 'Enter route end date',
        businessDistance: 'Business purpose distance',
        maximalSpeed: 'Maximal reached speed',
        averageSpeed: 'Average speed',
        boughtFuelValue: 'Bought fuel volume',
        boughtFuelAmount: 'Price spent for fuel',
        counterEndState: 'The distance counter end state',
        description: 'The travel details',
    };

    const [fieldMessage, setFieldMessage] = React.useState({
        driver: defaultFieldMessage.driver,
        carLicence: defaultFieldMessage.carLicence,
        selectedStartDate: defaultFieldMessage.selectedStartDate,
        selectedEndDate: defaultFieldMessage.selectedEndDate,
        businessDistance: defaultFieldMessage.businessDistance,
        maximalSpeed: defaultFieldMessage.maximalSpeed,
        averageSpeed: defaultFieldMessage.averageSpeed,
        boughtFuelValue: defaultFieldMessage.boughtFuelValue,
        boughtFuelAmount: defaultFieldMessage.boughtFuelAmount,
        counterEndState: defaultFieldMessage.counterEndState,
        description: defaultFieldMessage.description,
    });

    const fieldErrorMessage = {
        driver: 'Value required!',
        carLicence: 'Value required!',
        selectedStartDate: 'Incorrect value',
        selectedEndDate: 'Incorrect value',
        businessDistance: 'Incorrect value',
        maximalSpeed: 'Incorrect value',
        averageSpeed: 'Incorrect value',
        boughtFuelValue: 'Incorrect value',
        boughtFuelAmount: 'Incorrect value',
        counterEndState: 'Incorrect value',
        description: 'Incorrect value',
    }

    const [isError, setError] = React.useState({
        driver: false,
        carLicence: false,
        selectedStartDate: false,
        selectedEndDate: false,
        businessDistance: false,
        maximalSpeed: false,
        averageSpeed: false,
        boughtFuelValue: false,
        boughtFuelAmount: false,
        counterEndState: false,
        description: false,
    });



    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const addError = (errorKey, optionalErrorMessageKey) => {
        setError({ ...isError, [errorKey]: true });
        setFieldMessage({ ...fieldMessage, [errorKey]: fieldErrorMessage[optionalErrorMessageKey!=null?optionalErrorMessageKey:errorKey] })
        console.log('addError for key: '+errorKey);
    }

    const removeError = (errorKey) => {
        setError({ ...isError, [errorKey]: false });
        setFieldMessage({ ...fieldMessage, [errorKey]: defaultFieldMessage[errorKey] })
    }

    /** Form validation */
    const validateForm = () => {
        let canSubmit = false;
        //handleFieldError('driver', values.driver === '');
        handleFieldError('carLicence', true);
        handleFieldError('driver', true);

        // selectedStartDate: false,
        // selectedEndDate: false,
        // businessDistance: false,
        // maximalSpeed: false,
        // averageSpeed: false,
        // boughtFuelValue: false,
        // boughtFuelAmount: false,
        // counterEndState: false,
        // description: false,

        if (canSubmit) {
            props.handleSubmit();
        }
    }

    const handleFieldError = (fieldId, flag, optionalErrorMessageKey) =>{
        if (flag) {
            addError(fieldId,optionalErrorMessageKey);
        } else {
            removeError(fieldId);
        }
        return flag;
    }

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
                                <FormControl fullWidth error={isError.carLicence}>
                                    <InputLabel id="carLicence-label">Car licence id</InputLabel>
                                    <Select
                                        labelId="carLicence"
                                        id="carLicence"
                                        value={values.carLicence}
                                        fullWidth
                                        onChange={handleChange('carLicence')}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>BL-009YZ</MenuItem>
                                        <MenuItem value={2}>ZA-484DD</MenuItem>
                                    </Select>
                                    <FormHelperText>{fieldMessage.carLicence}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.driver}>
                                    <InputLabel id="driverID-label">Driver name</InputLabel>
                                    <Select
                                        labelId="driverID-label"
                                        id="driverID"
                                        value={values.driver}
                                        fullWidth
                                        onChange={handleChange('carLicence')}
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

                            <Grid item xs={6}>
                                <FormControl fullWidth error>
                                    <TextField autoFocus margin="dense" id="startDestination" label="Start destination" fullWidth
                                        value={values.startDestination} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.endDestination}>
                                    <TextField autoFocus margin="dense" id="endDestination" label="End destination2" fullWidth
                                        value={values.endDestination} />
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.selectedStartDate}>
                                    <TextField autoFocus margin="dense" id="startDateTime" label="Start date" type="datetime-local" InputLabelProps={{ shrink: true }} fullWidth
                                        onChange={handleChange('selectedStartDate')}
                                        value={values.selectedStartDate} />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.selectedEndDate}>
                                    <TextField autoFocus margin="dense" id="endTime" label="End date" type="datetime-local" InputLabelProps={{ shrink: true }} fullWidth
                                        onChange={handleChange('selectedEndDate')}
                                        value={values.selectedEndDate} />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.description}>
                                    <TextField autoFocus margin="dense" id="description" label="Description" fullWidth
                                        onChange={handleChange('description')}
                                        value={values.description} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField autoFocus margin="dense" id="counterEndState" label="Counter end state" fullWidth
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                    }}
                                    onChange={handleChange('counterEndState')}
                                    value={values.counterEndState}
                                    error={isError.counterEndState} />
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.businessDistance}>
                                    <TextField autoFocus margin="dense" id="businessDistance" label="Business distance" fullWidth type="number"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">km</InputAdornment>,
                                        }}
                                        onChange={handleChange('businessDistance')}
                                        value={values.businessDistance} />
                                    <FormHelperText>Distance value</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.personalDistance}>
                                    <TextField error={false} autoFocus margin="dense" id="personalDistance" label="Personal distance" fullWidth type="number"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">km</InputAdornment>,
                                        }}
                                        onChange={handleChange('personalDistance')}
                                        value={values.personalDistance} />
                                    <FormHelperText>Distance value</FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.boughtFuelValue}>
                                    <TextField autoFocus margin="dense" id="boughtFuelValue" label="Bought fuel value" fullWidth
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">lit.</InputAdornment>,
                                        }}
                                        onChange={handleChange('personalDistance')}
                                        value={values.boughtFuelValue}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.boughtFuelAmount}>
                                    <TextField autoFocus margin="dense" id="boughtFuelAmount" label="Bought fuel amount" fullWidth
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                        }}
                                        onChange={handleChange('boughtFuelAmount')}
                                        value={values.boughtFuelAmount} />
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.maximalSpeed}>
                                    <TextField autoFocus margin="dense" id="maximalSpeed" label="Maximal speed" fullWidth
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">km/h</InputAdornment>,
                                        }}
                                        onChange={handleChange('maximalSpeed')}
                                        value={values.maximalSpeed} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth error={isError.averageSpeed}>
                                    <TextField autoFocus margin="dense" id="averageSpeed" label="Average speed" fullWidth
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">km/h</InputAdornment>,
                                        }}
                                        onChange={handleChange('averageSpeed')}
                                        value={values.averageSpeed} />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={validateForm} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
