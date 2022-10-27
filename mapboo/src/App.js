import React from 'react';
import AppCss from './App.css';
import Maps from './Maps';
import Form from './Form';
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
              <Link className="link-nav" to="/home"><span className="material-symbols-outlined">home</span><text className="navlink-text">Home</text></Link>
            </li>
            <li className="link">
              <Link className="link-nav" to="/maps"><span className="material-symbols-outlined">map</span><text className="navlink-text">Map</text></Link>
            </li>
            <li className="link">
              <Link className="link-nav" to="/form"><span className="material-symbols-outlined">comment</span><text className="navlink-text">Comment</text></Link>
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
