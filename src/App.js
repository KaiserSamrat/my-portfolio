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
import Navbar from './Components/Navbar/Navbar';
import AllBlog from './Components/AllBlog/AllBlog';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path='/allProject'>
            <Allproject></Allproject>

          </Route>
          <Route path='/allBlog'>
           <AllBlog></AllBlog>

          </Route>
          <Route path='/contactDetail'>
           <ContactDetails></ContactDetails>

          </Route>
          <Route path='*'> 
          <NotFound></NotFound>

          </Route>
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
