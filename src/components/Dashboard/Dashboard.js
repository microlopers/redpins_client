import React from 'react';

import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DashboardItem from './DashboardItem';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from 'react-router-dom';



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

  export default function Dashboard() {
    const classes = useStyles();

    function dislpaySettings(){
        console.log("Display settings activated!")
    }

    function openCarList(){
        history.push("/carlog");
    }

    const history = useHistory();
    const carIcon = <DirectionsCarIcon style={{ color: 'ffffff', fontSize: '100%' }}/>
    const settingsIcon = <SettingsIcon style={{ color: 'ffffff', fontSize: '100%' }} />

    return(
        <div className={classes.root}  style={{backgroundColor:'#efefef'}}>
            <Container>
            <Grid container spacing={10}>
                <Grid item xs={12}><h1>Dashboard</h1></Grid>
                <Grid item xs={12} sm={4}>
                     <DashboardItem title="Car log" onstuk={openCarList} icon={carIcon} background='#e3594f' footertitle='Last record:' footertext='BL-009YZ on 9/7/2020'></DashboardItem>
                </Grid>
                <Grid item xs={12} sm={4}>
                     <DashboardItem title="Settings" onstuk={dislpaySettings} icon={settingsIcon} background='#54c45e' footertitle='Last update:' footertext='1/7/2020'></DashboardItem>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

