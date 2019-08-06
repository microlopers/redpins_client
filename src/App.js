import React from 'react';
//import logo from './logo.svg';
import logo from './logo_redpins_final.svg';
import './App.css';
import FacebookLoginCp from './FacebookLoginCp';
 
const responseFacebook = (response) => {
  console.log(response);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please login
        </p>
        <FacebookLoginCp/>
      </header>
    </div>
  );
}



export default App;
