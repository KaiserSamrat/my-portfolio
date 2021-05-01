import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Expertise from './Expertise/Expertise';
import Project from './Project/Project';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Expertise></Expertise>
        <Project></Project>
        <Switch>
          <Route path='/'>
           

          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
