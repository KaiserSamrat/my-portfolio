import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Allproject from './Components/Allproject/Allproject';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Router>
       
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path='/allProject'>
            <Allproject></Allproject>

          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
