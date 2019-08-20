import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import MenuBar from './MenuBar';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import logo from './logo_redpins_final.svg';
import Footer from './Footer';
import LoginContainer from "./LoginContainer"




class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      user: '',
      email: '',
      picture: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(response) {
    console.log("Callback initiated");

    this.setState({
      user: response.name
    });
    if (this.state.user != null) {
      this.setState({
        email: response.email,
        picture: response.picture.data.url
      });
      console.log("Logged as " + this.state.user);
      console.log("Picture " + this.state.picture);
    }
    this.setState({
      isLoggedIn: true
    });

  }

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

    let headerPart;
    let bodyPart;
    if (this.state.isLoggedIn) {
      headerPart = <MenuBar name={this.state.user} picture={this.state.picture} />;
      bodyPart = <div></div>
    } else {
      headerPart = <img src={logo} className="App-logo" alt="logo" />;
      bodyPart = <LoginContainer action={this.handleLogin} />
    }

    return (
      <div>
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
    )
  }
}



export default App;
