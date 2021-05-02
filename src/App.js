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
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Expertise></Expertise>
        <Project></Project>
        <Blog></Blog>
        <Contact></Contact>
        <Switch>
          <Route path='/'>
           

          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
