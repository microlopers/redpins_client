import React, { Component } from 'react';
import './App.css';
import FacebookLoginCp from './FacebookLoginCp';
import 'typeface-roboto';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import MenuBar from './MenuBar';
import SignIn from './SignIn';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { red } from '@material-ui/core/colors';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import logo from './logo_redpins_final.svg';




class App extends Component {

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: grey,
        secondary: red,
      },
      status: {
        danger: 'orange',
      },
    });

    return (
      <div>
        <ThemeProvider theme={theme}>


          <Grid container direction="row" justify="center" alignItems="center">
            <MenuBar />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <img src={logo} className="App-logo" alt="logo" />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid container direction="column" justify="center" alignItems="center" xs="6">
              <SignIn />
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" xs="6">
              <FacebookLoginCp />
            </Grid>
          </Grid>

        </ThemeProvider>
      </div>
    )
  }
}



export default App;
