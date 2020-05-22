import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import RootView from './views/RootView';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';



function App() {

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
    <Router>
      <div className="App">
        {/* looged in : {loginState ? 'true' : 'false'} */}
        <ThemeProvider theme={theme}>
          <Route path="/" exact strict component={RootView} />
        </ThemeProvider>

      </div>
    </Router>
  );

}

export default App
