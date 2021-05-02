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
import Expertise from './Components/Expertise/Expertise'
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

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
        <Footer></Footer>
        <Switch>
          <Route path='/'>
           

          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
