import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Components/Homepage';
import Profilepage from './Components/Profilepage';
import './Assets/css/style.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/Profilepage' component={Profilepage}/>
    </div>
    </Router>
  );
}

export default App;
