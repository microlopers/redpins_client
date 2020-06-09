import React from 'react';
import { Grid, Container, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { doLoadCarListAction } from '../../redux/actions';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    iconBox: {
        backgroundColor: '#dddddd',
        border: 0,
        borderRadius: 3,
        boxShadow: 1,
        horizontalAlign: 'center',
        padding: "5px",
        marginTop: "5px",
        marginRight: "5px",
        marginLeft: "20px",
        width: '30%',
        fontSize: 40
    }
    // container: {
    //     maxHeight: 440,
    // },
}));

const columns = [
    { id: 'id', label: 'id', minWidth: 70 },
    { id: 'carLicenceId', label: 'carLicenceId', minWidth: 70 },
    { id: 'startDestination', label: 'startDestination', minWidth: 70 },
    { id: 'endDestination', label: 'endDestination', minWidth: 70 },
    { id: 'startDateTime', label: 'startDateTime', minWidth: 70 },
    { id: 'endTime', label: 'endTime', minWidth: 70 },
    { id: 'description', label: 'description', minWidth: 70 },
    { id: 'counterEndState', label: 'counterEndState', minWidth: 70 },
    { id: 'businessDistance', label: 'businessDistance', minWidth: 70 },
    { id: 'personalDistance', label: 'personalDistance', minWidth: 70 },
    { id: 'boughtFuelValue', label: 'boughtFuelValue', minWidth: 70 },
    { id: 'boughtFuelAmount', label: 'boughtFuelAmount', minWidth: 70 },
    { id: 'driverID', label: 'driverID', minWidth: 70 },
    { id: 'maximalSpeed', label: 'maximalSpeed', minWidth: 70 },
    { id: 'averageSpeed', label: 'averageSpeed', minWidth: 70 }



    // {
    //     id: 'population',
    //     label: 'Population',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //     id: 'size',
    //     label: 'Size\u00a0(km\u00b2)',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //     id: 'density',
    //     label: 'Density',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toFixed(2),
    // },
];

function createData(id,
    carLicenceId,
    startDestination,
    endDestination,
    startDateTime,
    endTime,
    description,
    counterEndState,
    businessDistance,
    personalDistance,
    boughtFuelValue,
    boughtFuelAmount,
    driverID,
    maximalSpeed,
    averageSpeed) {
    return {
        id,
        carLicenceId,
        startDestination,
        endDestination,
        startDateTime,
        endTime,
        description,
        counterEndState,
        businessDistance,
        personalDistance,
        boughtFuelValue,
        boughtFuelAmount,
        driverID,
        maximalSpeed,
        averageSpeed
    };
}



const getTableRows = (responseData) => {
    let retVal = [];
    responseData.forEach(element => {
        console.log(element.id + "," + element.licencePlate)
        retVal.push(createData(element.id,
            element.carLicenceId,
            element.startDestination,
            element.endDestination,
            element.startDateTime,
            element.endTime,
            element.description,
            element.counterEndState,
            element.businessDistance,
            element.personalDistance,
            element.boughtFuelValue,
            element.boughtFuelAmount,
            element.driverID,
            element.maximalSpeed,
            element.averageSpeed));
    });
    return retVal;
}

export default function Carlog() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const carData = useSelector(state => state);


    let rows = [];

    // console.log(carData);
    // let textik = null;
    if (carData != null && carData.carReducer != null && carData.carReducer.cars != null) {
        //     console.log("Data:")
        //     console.log(carData.carReducer.cars);
        //     textik = carData.carReducer.cars.toString()
        //     console.log(textik);
        rows = getTableRows(carData.carReducer.cars)
    }

    function loadCardList() {
        console.log("Function: loadCardList");
        dispatch(doLoadCarListAction());
    }

    // const carIcon = <DirectionsCarIcon style={{ color: 'ffffff', fontSize: '100%' }} />

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div className={classes.root} style={{ backgroundColor: '#efefef' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Box className={classes.iconBox} style={{ backgroundColor: '#e3594f' }}>
                            <DirectionsCarIcon style={{ color: 'ffffff', fontSize: '100%' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={2} alignContent="flex-start"><h1>Car logs</h1></Grid>
                    <Grid item xs={8} alignContent="flex-start"><Button onClick={loadCardList} >load</Button></Grid>
                    <Grid item xs={12}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}