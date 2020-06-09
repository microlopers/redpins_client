import React from 'react';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import DashboardView from './views/DashboardView';
import LoginView from './views/LoginView';
import CarlogView from './views/CarlogView';
import { useSelector } from 'react-redux';



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

  const loginState = useSelector(state => state.login);

  return (
    <Router>
      <div className="App">
        {/* looged in : {loginState ? 'true' : 'false'} */}
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact strict component={LoginView} />
            <ProtectedRoute path='/dashboard' exact component={DashboardView} login={loginState.user!=null?loginState.user:null}/>
            <ProtectedRoute path='/carlog' exact component={CarlogView} login={loginState.user!=null?loginState.user:null}/>
          </Switch>
        </ThemeProvider>

      </div>
    </Router>
  );

}

export default App
