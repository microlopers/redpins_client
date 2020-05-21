import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../resources/graphics/logo_redpins_final.svg';
import avatar from '../resources/graphics/redpinAvatar.png';
import Footer from '../Footer';
import LoginContainer from "../LoginContainer";
import { loginAction } from '../redux/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import Carlog from '../components/Carlog/Carlog';
import MenuBar from '../components/Menu/MenuBar';



export default function RootView(props) {

    const loginState = useSelector(state => state.login);
    const showPosition = useSelector(state => state.appController);
    const dispatch = useDispatch();

    const handleLogin = (response) => {
        console.log("Callback initiated with user: " + response.name);
        dispatch(loginAction(response));

        // this.setState({
        //   user: response.name
        // });
        // if (this.state.user != null) {
        //   this.setState({
        //     email: response.email,
        //     picture: response.picture.data.url
        //   });
        //   console.log("Logged as " + this.state.user);
        //   console.log("Picture " + this.state.picture);
        // }
        // this.setState({
        //   isLoggedIn: true
        // });

    }

    let headerPart;
    let bodyPart;

    // Development skip 
    //loginState.loggedIn = true

    if (loginState.loggedIn) {
        //headerPart = <MenuBar name={this.state.user} picture={this.state.picture} />;
        headerPart = <MenuBar name={loginState.user != null ? loginState.user : "DEVELOPER"} picture={loginState.picture != null ? loginState.picture : avatar} />;
        if (showPosition.position === 'DASHBOARD') {
            bodyPart = <div><Dashboard></Dashboard></div>
        } else if (showPosition.position === 'CARLOG') {
            bodyPart = <div><Carlog></Carlog></div>
        }

    } else {
        headerPart = <img src={logo} className="App-logo" alt="logo" />;
        bodyPart = <LoginContainer action={handleLogin} />
    }

    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                {headerPart}
            </Grid>
            {bodyPart}

            <Grid container direction="row" justify="center" alignItems="center">
                <Footer />
            </Grid>
        </div>
    );

}