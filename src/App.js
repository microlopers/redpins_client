import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import MenuBar from './components/Menu/MenuBar';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import logo from './resources/graphics/logo_redpins_final.svg';
import avatar from './resources/graphics/redpinAvatar.png';
import Footer from './Footer';
import LoginContainer from "./LoginContainer";
import { loginAction } from './actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';




function App() {
  const loginState = useSelector(state => state.login);
  const dispatch = useDispatch();
  const theme = createMuiTheme({
    palette: {
      primary: grey,
      secondary: red,
    },
    status: {
      danger: 'orange',
    },
  });

  const handleLogin = (response) => {
        console.log("Callback initiated with user: "+response.name);
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
  loginState.loggedIn = true

  if (loginState.loggedIn) {
    //headerPart = <MenuBar name={this.state.user} picture={this.state.picture} />;
    headerPart = <MenuBar name={loginState.user!=null?loginState.user:"DEVELOPER"} picture={loginState.picture!=null?loginState.picture:avatar}  />;
    bodyPart = <div><Dashboard></Dashboard></div>
  } else {
    headerPart = <img src={logo} className="App-logo" alt="logo" />;
    bodyPart = <LoginContainer action={handleLogin} />
  }

  return (
    <div className="App">
      {/* looged in : {loginState ? 'true' : 'false'} */}
      <ThemeProvider theme={theme}>


        <Grid container direction="row" justify="center" alignItems="center">
          {headerPart}
        </Grid>
        {bodyPart}

        <Grid container direction="row" justify="center" alignItems="center">
          <Footer />
        </Grid>
      </ThemeProvider>

    </div>
  );

}

export default App
