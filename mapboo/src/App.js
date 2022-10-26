import React, { useState } from 'react';
import './App.css';
//import Header from './Header';
import Maps from './Maps';
import Form from './Form';
//import Footer from './Footer';
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// routes will be home, map and form 

function App() {

  return (
    <Router>
      <div>
      <nav className="navigation">
      <div className="logo">Aire</div>
        <ul className="navlinks">
            <li className="link">
              <Link to="/home"><span class="material-symbols-outlined">home</span>Home</Link>
            `</li>
            <li className="link">
              <Link to="/maps"><span class="material-symbols-outlined">map</span>Map</Link>
            </li>
            <li className="link">
              <Link to="/form"><span class="material-symbols-outlined">comment</span>Comment</Link>
            </li>
          </ul>
        </nav>
        <footer />
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/maps">
            <Maps/>
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/home">   
            <Home />
          </Route>
          <Route path="/">   
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
