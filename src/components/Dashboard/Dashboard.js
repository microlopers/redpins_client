import React, { Component } from 'react';

import Axios from 'axios';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DashboardItem from './DashboardItem';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SettingsIcon from '@material-ui/icons/DirectionsCar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Dashboard() {
    const classes = useStyles();

    let carDetails = null
    function loadCardDetail(){
        Axios.get('https://localhost:8443/cardetails', { crossdomain: true }).then(
            res => {
                carDetails = res.data;
                console.log(carDetails);
                console.log(carDetails.id);
                console.log(carDetails.licencePlate);
            }
        )
    }

    function dislpaySettings(){
        console.log("Display settings activated!")
    }

    const carIcon = <DirectionsCarIcon style={{ color: 'aa0000' }} />
    const settingsIcon = <SettingsIcon style={{ color: 'aa0000' }} />

    return(
        <div className={classes.root}  style={{backgroundColor:'#efefef'}}>
            <Container>
            <Grid container spacing={10}>
                <Grid item xs={12}><h1>Dashboard</h1></Grid>
                <Grid item xs={12} sm={4}>
                     <DashboardItem title="Car log" onstuk={loadCardDetail} icon={carIcon}></DashboardItem>
                </Grid>
                <Grid item xs={12} sm={4}>
                     <DashboardItem title="Settings" onstuk={dislpaySettings} icon={settingsIcon}></DashboardItem>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Dashboard