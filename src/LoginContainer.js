import React from 'react';
import SignIn from './SignIn';
import Grid from '@material-ui/core/Grid';
import FacebookLoginCp from './FacebookLoginCp';
import { developmentLoginAction } from './redux/actions';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { DEVELOPMENT_MODE } from './config';

export default function LoginContainer(props) {

    const dispatch = useDispatch();

    const developmentLoginButton = <div><br></br><Button variant="contained" color="secondary" onClick={() => { dispatch(developmentLoginAction()) }}>Development login</Button></div>;
    let output = DEVELOPMENT_MODE ? developmentLoginButton : '';

    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item  xs={6}>
                        <SignIn />
                    </Grid>
                    <Grid item  xs={6}>
                        <FacebookLoginCp action={props.action} />
                        {output}
                    </Grid>
            </Grid>
        </div>
    )

}