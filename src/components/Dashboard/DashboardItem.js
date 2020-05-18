import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import dashboardBox from "../../assets/jss/redpinsStyles"; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    dashboardBox: {
        border: 0,
        borderRadius: 6,
        boxShadow: 1,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
    },
    dashboardIconBox: {
        border: 0,
        borderRadius: '1',
        boxShadow: 1,
        backgroundColor: '#dddddd',
        horizontalAlign: 'center',
        margin: '-50px 0px 20px',
        width: '40%',
        height: '50%',
        overflow: "hidden" 
    }
  }));

export default function DashboardItem(props) {
    const classes = useStyles();
    
    
    return (
        
        <Box className={classes.dashboardBox} p={2}>
            <Box className={classes.dashboardIconBox}>{props.icon}</Box>
            
            sdfsdf
            <Button onClick={props.onstuk}>{props.title}</Button>
        </Box>
    )
}