import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import dashboardBox from "../../assets/jss/redpinsStyles"; 

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

export default function DashboardItem(props) {
    const classes = useStyles();
    
    
    return (
        
        <Box p={2} style={{backgroundColor:'#ffffff'}} border={0} borderRadius={6} boxShadow={1}>
            <Box>{props.icon}</Box>
            
            sdfsdf
            <Button onClick={props.onstuk}>{props.title}</Button>
        </Box>
    )
}