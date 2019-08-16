import React, {Component} from 'react';
import logo from './logo_redpins_final.svg';
import './App.css';
import FacebookLoginCp from './FacebookLoginCp';
import 'typeface-roboto';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import MenuBar from './MenuBar';
import SignIn from './SignIn';


class App extends Component {

  render() {
    return (
      <div>
        
          <SignIn />

        
      </div>
    )
  }
}



export default App;
