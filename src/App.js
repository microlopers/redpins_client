import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import BaseView from './views/BaseView';




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
    <div className="App">
      {/* looged in : {loginState ? 'true' : 'false'} */}
      <ThemeProvider theme={theme}>

        <BaseView></BaseView>
        
      </ThemeProvider>

    </div>
  );

}

export default App
