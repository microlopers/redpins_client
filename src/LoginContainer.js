import React, { Component } from 'react';
import SignIn from './SignIn';
import Grid from '@material-ui/core/Grid';
import FacebookLoginCp from './FacebookLoginCp';
import { loginAction } from './redux/actions'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

export default function LoginContainer(props){
    
    const dispatch = useDispatch();


    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container direction="column" justify="center" alignItems="center" xs="6">
                    <SignIn />
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center" xs="6">
                    <FacebookLoginCp action={props.action}/>
                    <br></br>
                    <Button variant="contained" color="secondary" onClick={() => { dispatch(loginAction()) }}>
                    Development login
                    </Button>
                    
                </Grid>
            </Grid>
        </div>
    )

}