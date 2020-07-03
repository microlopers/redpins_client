import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../resources/graphics/logo_redpins_final.svg';
import Footer from '../Footer';
import LoginContainer from "../LoginContainer";
import { loginAction } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router";



export default function LoginView() {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login);

    const handleLogin = (response) => {
        console.log("Callback initiated with user:" + response.name);
        dispatch(loginAction(response));
    }

    const lastLocation = window.localStorage.getItem('lastLocation');
    console.log('lastLocation: '+lastLocation)

    if (loginState.user!=null) {
        console.log("rerouting to dashboard");
        return <Redirect to={lastLocation!=null?lastLocation:'/dashboard'} />;
    } else {

        return (
            <div>
                <Grid container direction="row" justify="center" alignItems="center">
                    <img src={logo} className="App-logo" alt="logo" />
                </Grid>
                <LoginContainer action={handleLogin} />

                <Grid container direction="row" justify="center" alignItems="center">
                    <Footer />
                </Grid>
            </div>
        );
    }
}