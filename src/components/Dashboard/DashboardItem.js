import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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
        margin: "1px",
        padding: "1px",
    },
    dashboardBoxHeader: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    dashboardBoxHeaderText: {
        backgroundColor: 'white',
        textAlign: "right",
        width: "100%"
    },
    dashboardBoxFooter: {
        backgroundColor: 'white',
        borderColor: '#dddddd',
        marginTop: "10px"
    },
    dashboardIconBox: {
        backgroundColor: '#dddddd',
        border: 0,
        borderRadius: 3,
        boxShadow: 1,
        horizontalAlign: 'center',
        padding: "5px",
        marginTop: "-30px",
        marginRight: "5px",
        marginLeft: "20px",
        width: '30%',
        fontSize: 40
    }
  }));

export default function DashboardItem(props) {
    const classes = useStyles();

    return (
        
        <Container className={classes.dashboardBox} p={2}>
            <Box className={classes.dashboardBoxHeader}>
                <Box className={classes.dashboardIconBox} style={{backgroundColor: props.background}}>{props.icon}</Box>
                <Box className={classes.dashboardBoxHeaderText}><Button onClick={props.onstuk}>{props.title}</Button></Box>
            </Box>
            <Box className={classes.dashboardBoxFooter} borderTop={1}>
                <Box>hello</Box>
            </Box>
        </Container>
    )
}